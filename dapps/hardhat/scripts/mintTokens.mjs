import { ethers } from "ethers";
import dotenv from "dotenv";
import deployment from "../deployments/sepolia/MyConfidentialERC20.json" assert { type: "json" };

dotenv.config();

const CONTRACT_ADDRESS = deployment.address;
const ABI = deployment.abi;

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  console.log("Using signer:", wallet.address);

  const token = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

  const amount = 10n;
  console.log(`Minting ${amount} tokens to ${wallet.address}...`);

  const tx = await token.customMint(wallet.address, amount);
  await tx.wait();

  console.log("✅ Mint complete!");
}

main().catch((err) => {
  console.error("❌ Error:", err);
});

