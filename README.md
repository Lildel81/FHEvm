# Encrypted Voting (Zama FHEVM) — Hardhat Project

A minimal FHE-enabled voting/token demo using Zama’s FHEVM on Sepolia, built with Hardhat + Ethers **v6**. It includes scripts to start an election, cast a vote, end the election, and request decryption via Zama’s Gateway (subject to Gateway ACL), plus simple token mint/balance examples.

---

## Prerequisites

- **Node.js ≥ 18** (includes `npx`)
- **npm** (comes with Node)
- A Sepolia RPC endpoint (e.g., from Alchemy/Infura/etc.)
- A funded Sepolia account (for gas)

> Check versions:
```bash
node -v
npm -v
```

---

## Quick Start

### 1) Clone & install
```bash
git clone git@github.com:Lildel81/FHEvm.git
cd <repo-root>/dapps/hardhat
npm install
```

### 2) Configure environment

Create a `.env` file in `dapps/hardhat/` (same folder as `hardhat.config.*`) with the following:

```bash
MNEMONIC="<ADD YOUR MNEMONIC HERE>"
PRIVATE_KEY="<ADD YOUR PRIVATE KEY HERE>"
SEPOLIA_RPC_URL="<ADD THE SEPOLIA RPC URL HERE>"
ETHERSCAN_API_KEY="<ADD THE ETHERSCAN API KEY HERE>"
```

- Provide **either** `MNEMONIC` **or** `PRIVATE_KEY` (some setups prefer one over the other).
- Keep this file **private** and **never commit** it.

### 3) Compile
```bash
npx hardhat compile
```

### 4) Deploy to Sepolia
From `dapps/hardhat/`:
```bash
npx hardhat deploy --network sepolia
```

The console will print your deployed contract address(es). Save these for later scripts.

---

## What’s Inside

- `contracts/` — Solidity sources (FHEVM voting/token logic)
- `deploy/` — Hardhat Deploy scripts
- `scripts/`
  - `vote_and_decrypt.ts` — starts/restarts election (if supported), casts one vote, ends election, requests decryption, waits for callback
  - `debug_script.ts` — prints election state (owner, started/ended, timestamps)
  - `viewEncryptedBalance.mjs` — shows encrypted balance (ciphertext)
  - `decBalance.mjs` — shows decrypted balance (requires Gateway callback/ACL depending on contract)
  - `mintTokens.mjs` — mints demo tokens and adds to balance homomorphically

> Some scripts may assume **ethers v6**. If you fork or adapt, check how static calls are made (see Troubleshooting).

---

## Running Scripts

From `dapps/hardhat/`:

### Open the Hardhat console
```bash
npx hardhat console --network sepolia
```

Use it to call functions manually against your contract.

### Use the provided scripts

**Debug election state**
```bash
VOTING_CONTRACT_ADDRESS=0xYourContract npx hardhat run scripts/debug_script.ts --network sepolia
```

<img width="521" height="125" alt="image" src="https://github.com/user-attachments/assets/ed896463-82d8-4fce-9b92-440954383311" />


**Run one vote → end → request decryption**
```bash
VOTING_CONTRACT_ADDRESS=0xYourContract CANDIDATE=0 DURATION=600 npx hardhat run scripts/vote_and_decrypt.ts --network sepolia
```

<img width="924" height="147" alt="image" src="https://github.com/user-attachments/assets/eef46276-5925-4b58-91ff-33e81caa273d" />


**View encrypted balance**
```bash
VOTING_CONTRACT_ADDRESS=0xYourContract node scripts/viewEncryptedBalance.mjs
```

<img width="1099" height="109" alt="image" src="https://github.com/user-attachments/assets/8f19deb0-5da0-4033-9d4f-d49d66e3f034" />


**View decrypted balance**
```bash
VOTING_CONTRACT_ADDRESS=0xYourContract node scripts/decBalance.mjs
```

<img width="1006" height="113" alt="image" src="https://github.com/user-attachments/assets/9cb6da5e-05dd-412b-886b-e1ba773f50f1" />


**Mint demo tokens**
```bash
VOTING_CONTRACT_ADDRESS=0xYourContract node scripts/mintTokens.mjs
```

<img width="1009" height="89" alt="image" src="https://github.com/user-attachments/assets/2257f700-0332-4f83-aff8-3abb5a514c38" />


> Replace `0xYourContract` with your deployed address. Some scripts may also read from a local config file if you added one.

---

## Zama Gateway ACL (Important)

Calling `requestDecryption()` on Sepolia goes through Zama’s **Gateway** and is subject to their **ACL (allow-list)**. If your contract address is **not whitelisted**, you will see a revert such as:

```
execution reverted: sender isn't allowed
```

<img width="922" height="200" alt="image" src="https://github.com/user-attachments/assets/3abb78c7-a60c-4ae5-b26e-4ff52ae68bb0" />


This is **not** fixed by `TFHE.allowThis(...)` (that only authorizes your contract to use ciphertexts locally). To successfully decrypt via the Gateway on Sepolia, your **contract address must be added to their ACL**. If you are experimenting locally with a mock gateway, this restriction may not apply.

---

## Common Errors & Fixes

### 1) `execution reverted: Election not active`
- The election has ended or hasn’t started yet.
- Fix: call `startElection(duration)` (owner only) and ensure `block.timestamp < electionEnd`.
- If your contract doesn’t support restarting after an ended election, redeploy or update to a version that increments an `electionId` per round.

### 2) `execution reverted: sender isn't allowed` during `requestDecryption`
- Your contract isn’t whitelisted in the Gateway’s ACL on Sepolia.
- Fix: have the contract address added to the ACL (or run with a local/mock gateway if applicable).

### 3) Ethers v6 static-call errors
If a script uses v5-style:
```ts
await contract.callStatic.requestDecryption();
```
On ethers v6, use:
```ts
await contract.requestDecryption.staticCall();
// or, depending on your setup:
// await contract.simulate.requestDecryption();
// or raw provider call:
const data = contract.interface.encodeFunctionData("requestDecryption", []);
await contract.runner.provider.call({ to: contract.target, from: await contract.getAddress(), data });
```

### 4) Owner mismatch
If functions are `onlyOwner` (e.g., `startElection`, `endElection`, `requestDecryption`), ensure your signer is the **deployer/owner**:
```ts
const owner = await contract.owner();
const signerAddr = await contract.getAddress();
```

---

## Security Notes

- Never commit private keys or mnemonics. `.env` should be in your `.gitignore`.
- Use a separate test wallet for Sepolia.
- Review gas costs and set sensible `DURATION`/timeouts when testing on public testnets.

---

## Verifying Contracts (optional)

If you use Etherscan verification:
```bash
npx hardhat verify --network sepolia 0xYourContract <constructor-args-if-any>
```

---

## License

MIT (or your preferred license)

---

## Contact / Issues

If scripts fail or you’d like tailored help (e.g., enabling multi-round elections with `electionId`, or adapting scripts for ethers v6), open an Issue or PR with:
- your Hardhat/Ethers versions,
- the exact error output,
- relevant function signatures from your contract.
