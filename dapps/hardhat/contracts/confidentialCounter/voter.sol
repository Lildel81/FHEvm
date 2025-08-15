// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "fhevm/lib/TFHE.sol";
import "fhevm/config/ZamaFHEVMConfig.sol";
import "fhevm/config/ZamaGatewayConfig.sol";
import "fhevm/gateway/GatewayCaller.sol";

contract EncryptedVoting is 
    SepoliaZamaFHEVMConfig, 
    SepoliaZamaGatewayConfig, 
    GatewayCaller 
{
    address public owner;
    uint256 public electionEnd;
    bool public electionStarted;
    bool public electionEnded;

    mapping(address => bool) public hasVoted;

    euint8 internal candidate0EncryptedVotes;
    euint8 internal candidate1EncryptedVotes;

    uint256 public decryptedCandidate0Votes;
    uint256 public decryptedCandidate1Votes;

    mapping(uint256 => uint8) public pendingDecryptionResult; // 0 = candidate0, 1 = candidate1
    mapping(uint256 => bool) public pendingRequestComplete;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can do this");
        _;
    }

    modifier duringElection() {
        require(electionStarted && !electionEnded && block.timestamp < electionEnd, "Election not active");
        _;
    }

    modifier afterElection() {
        require(electionEnded || block.timestamp >= electionEnd, "Election not yet ended");
        _;
    }

    function startElection(uint256 durationInSeconds) external onlyOwner {
        require(!electionStarted, "Election already started");
        electionStarted = true;
        electionEnd = block.timestamp + durationInSeconds;
    }

    function endElection() external onlyOwner {
        require(electionStarted && !electionEnded, "Election not active or already ended");
        electionEnded = true;
    }

    function vote(uint8 candidate) external duringElection {
        require(candidate == 0 || candidate == 1, "Invalid candidate");
        require(!hasVoted[msg.sender], "You already voted");

        hasVoted[msg.sender] = true;

        if (candidate == 0) {
            candidate0EncryptedVotes = TFHE.add(candidate0EncryptedVotes, 1);
	    TFHE.allowThis(candidate0EncryptedVotes);
        } else {
            candidate1EncryptedVotes = TFHE.add(candidate1EncryptedVotes, 1);
	    TFHE.allowThis(candidate1EncryptedVotes);
        }
    }
   function requestDecryption() external onlyOwner afterElection {
    // give ourselves permanent ACL rights so Gateway won't rever this call
    TFHE.allowThis(candidate0EncryptedVotes);
    TFHE.allowThis(candidate1EncryptedVotes);
    uint256[] memory cts0 = new uint256[](1);
    cts0[0] = Gateway.toUint256(candidate0EncryptedVotes);

    uint256[] memory cts1 = new uint256[](1);
    cts1[0] = Gateway.toUint256(candidate1EncryptedVotes);

    uint256 req0 = Gateway.requestDecryption(
        cts0,
        this.receiveDecryptedCandidate0.selector,
        0,
        block.timestamp + 1 days,
        false
    );

    uint256 req1 = Gateway.requestDecryption(
        cts1,
        this.receiveDecryptedCandidate1.selector,
        0,
        block.timestamp + 1 days,
        false
    );

    pendingDecryptionResult[req0] = 0;
    pendingDecryptionResult[req1] = 1;
}

    function receiveDecryptedCandidate0(uint256 requestId, uint256 value)
        public
        onlyGateway
        returns (uint256)
    {
        decryptedCandidate0Votes = value;
        pendingRequestComplete[requestId] = true;
        return value;
    }

    function receiveDecryptedCandidate1(uint256 requestId, uint256 value)
        public
        onlyGateway
        returns (uint256)
    {
        decryptedCandidate1Votes = value;
        pendingRequestComplete[requestId] = true;
        return value;
    }
}

