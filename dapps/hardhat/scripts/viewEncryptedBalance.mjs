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

  const encrypted = await token.balanceOf(address);
  console.log(`Encrypted balance for ${address}:`);
  console.log(encrypted);
}

main().catch(console.error);

