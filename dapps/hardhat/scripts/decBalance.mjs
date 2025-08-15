import { ethers } from "ethers";
import dotenv from "dotenv";
import deployment from "../deployments/sepolia/MyConfidentialERC20.json" assert { type: "json" };

dotenv.config();

const CONTRACT_ADDRESS = deployment.address;
const ABI = deployment.abi;

async function main() {
  const provider = new ethers.JsonRpcProvider(process.env.SEPOLIA_RPC_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  const address = wallet.address;

  const token = new ethers.Contract(CONTRACT_ADDRESS, ABI, wallet);

  console.log("Requesting decryption for:", address);
  const tx = await token.requestBalanceDecryption(address);
  await tx.wait();

  console.log("Decryption requested! Now waiting 20 seconds for Gateway to respond...");

  await new Promise((res) => setTimeout(res, 20000)); // wait for Zama Gateway

  const decrypted = await token.decryptedBalance(address);
  console.log("Decrypted balance:", decrypted.toString());
}

main().catch(console.error);

