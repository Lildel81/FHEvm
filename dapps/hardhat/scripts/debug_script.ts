import { ethers } from "hardhat";

const CONTRACT_ADDRESS = process.env.VOTING_CONTRACT_ADDRESS ?? "0x6BF9Bb93d350876Bbf5776C835FF455af6BA1604";

async function main() {
  const [signer] = await ethers.getSigners();
  const c = await ethers.getContractAt("EncryptedVoting", CONTRACT_ADDRESS, signer);

  const now = Math.floor(Date.now() / 1000);
  const started = await (c as any).electionStarted?.();
  const ended   = await (c as any).electionEnded?.();
  const endTs   = Number(await (c as any).electionEnd?.().catch(() => 0));
  const owner   = await (c as any).owner?.().catch(() => "unknown");

  console.log("Signer:       ", signer.address);
  console.log("Owner:        ", owner);
  console.log("Started:      ", started);
  console.log("Ended:        ", ended);
  console.log("End Timestamp:", endTs, endTs ? `(${new Date(endTs*1000).toISOString()})` : "");
  console.log("Now:          ", now, `(${new Date(now*1000).toISOString()})`);
  console.log("Active now?   ", started && !ended && (endTs === 0 || now < endTs));
}

main().catch((e) => { console.error(e); process.exit(1); });

