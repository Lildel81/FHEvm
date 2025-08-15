// SPDX-License-Identifier: BSD-3-Clause-Clear

pragma solidity ^0.8.24;

import "fhevm/lib/TFHE.sol";
import "fhevm/config/ZamaFHEVMConfig.sol";
import "fhevm/config/ZamaGatewayConfig.sol";
import "fhevm/gateway/GatewayCaller.sol";
import "fhevm-contracts/contracts/token/ERC20/extensions/ConfidentialERC20WithErrorsMintable.sol";

/// @notice This contract implements an encrypted ERC20-like token with confidential balances using Zama's FHE library.
/// @dev It supports typical ERC20 functionality such as transferring tokens, minting, and setting allowances,
/// @dev but uses encrypted data types.
contract MyConfidentialERC20 is
    SepoliaZamaFHEVMConfig,
    SepoliaZamaGatewayConfig,
    GatewayCaller,
    ConfidentialERC20WithErrorsMintable
{
    /// Store the last decrypted balance per address
    mapping(address => uint256) public decryptedBalance;
        mapping(uint256 => address) public pendingDecryptRequests;
    /// Constructor
    constructor(
        string memory name_,
        string memory symbol_
    ) ConfidentialERC20WithErrorsMintable(name_, symbol_, msg.sender) {}

    function customMint(address to, uint64 amount) public onlyOwner {
    super.mint(to, amount); // Call parent mint
    euint32 encrypted = TFHE.asEuint32(balanceOf(to));
    TFHE.allowThis(encrypted); // 👈 Allow the address to view its balance
}


    /// Request decryption of an encrypted balance
    function requestBalanceDecryption(address owner) public {
    // Get encrypted balance using public getter, then convert to euint
    euint32 encrypted = TFHE.asEuint32(balanceOf(owner));

    uint256[] memory cts = new uint256[](1);
    cts[0] = Gateway.toUint256(encrypted);

    uint256 requestId = Gateway.requestDecryption(
        cts,
        this.receiveDecryptedBalance.selector,
        0,
	block.timestamp + 1 days,
        false
	
    );
    pendingDecryptRequests[requestId] = owner;
}



    /// Callback function to receive the decrypted balance
    function receiveDecryptedBalance(uint256 requestId , uint256 value)
        public
        onlyGateway
        returns (uint256)
    {
	address owner = pendingDecryptRequests[requestId]; 
        decryptedBalance[owner] = value;
	delete pendingDecryptRequests[requestId];
        return value;
    }
}

