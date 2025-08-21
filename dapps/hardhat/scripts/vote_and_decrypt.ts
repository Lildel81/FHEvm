import { ethers } from "hardhat";

const CONTRACT_ADDRESS = process.env.VOTING_CONTRACT_ADDRESS ?? "0x6BF9Bb93d350876Bbf5776C835FF455af6BA1604";
const CANDIDATE = Number(process.env.CANDIDATE ?? "0");  // 0 or 1
const DURATION  = Number(process.env.DURATION  ?? "600"); // seconds

const POLL_MS  = 10_000;
const MAX_TRIES = 60;

function sleep(ms:number){ return new Promise(r=>setTimeout(r,ms)); }

async function tryStartElection(c:any) {
  // Try startElection() and startElection(uint256)
  try {
    const tx = await c.startElection();
    await tx.wait(); console.log("Started election (no-arg).");
    return;
  } catch {}
  try {
    const tx = await c.startElection(DURATION);
    await tx.wait(); console.log(`Started election (${DURATION}s).`);
    return;
  } catch (e:any) {
    throw new Error(`Could not start election. ${e?.message || e}`);
  }
}

async function readTallies(c:any){
  try {
    const v0 = await c.decryptedVotes?.(0);
    const v1 = await c.decryptedVotes?.(1);
    if (v0 !== undefined && v1 !== undefined) return { v0: Number(v0), v1: Number(v1) };
  } catch {}
  const v0 = await c.decryptedCandidate0Votes?.();
  const v1 = await c.decryptedCandidate1Votes?.();
  return { v0: Number(v0 ?? 0), v1: Number(v1 ?? 0) };
}

async function main() {
  if (![0,1].includes(CANDIDATE)) throw new Error(`CANDIDATE must be 0 or 1; got ${CANDIDATE}`);

  const signers = await ethers.getSigners();
  const owner = signers[0];
  const cAsOwner = await ethers.getContractAt("EncryptedVoting", CONTRACT_ADDRESS, owner);

  // Restart the election (it’s ended)
  console.log("Restarting election…");
  await tryStartElection(cAsOwner);

  // Try to vote with owner; if revert due to hasVoted, try second signer
  let voter = owner;
  let c = cAsOwner;
  try {
    console.log(`Voting from ${voter.address} for candidate ${CANDIDATE}…`);
    const tx = await c.vote(CANDIDATE);
    await tx.wait();
    console.log("Vote cast.");
  } catch (e:any) {
    const msg = e?.message || "";
    if (/voted/i.test(msg) || /already.*vot/i.test(msg) || /hasVoted/i.test(msg)) {
      if (!signers[1]) throw new Error("Primary signer already voted and no fallback signer available.");
      voter = signers[1];
      c = await ethers.getContractAt("EncryptedVoting", CONTRACT_ADDRESS, voter);
      console.log(`Primary signer already voted. Retrying with ${voter.address}…`);
      const tx2 = await c.vote(CANDIDATE);
      await tx2.wait();
      console.log("Vote cast (fallback signer).");
    } else {
      throw e;
    }
  }

  // End the election
  console.log("Ending election…");
  const endTx = await cAsOwner.endElection();
  await endTx.wait();
  console.log("Election ended.");

  // Request decryption (dry-run first)
  console.log("Requesting decryption…");
  try {
    await cAsOwner.callStatic.requestDecryption();
  } catch (e:any) {
    console.error("Static call reverted (likely ACL):", e?.message || e);
    throw e;
  }
  const reqTx = await cAsOwner.requestDecryption();
  const receipt = await reqTx.wait();

  // Optional: derive reqId
  let reqId: bigint | undefined;
  try { reqId = await (cAsOwner as any).getLastRequestId?.(); } catch {}
  if (reqId === undefined) {
    try {
      const iface = (cAsOwner as any).interface;
      const parsed = receipt.logs
        .map((l:any)=>{ try { return iface.parseLog(l); } catch { return null; } })
        .find((x:any)=> x && ["DecryptionRequested","DecryptionRequestedForVotes"].includes(x.name));
      if (parsed?.args?.requestId !== undefined) reqId = parsed.args.requestId as bigint;
    } catch {}
  }
  console.log("Decryption request sent.", reqId !== undefined ? `reqId=${reqId}` : "(reqId unknown)");

  // Poll for completion
  console.log("Waiting for gateway callback…");
  for (let i=1;i<=MAX_TRIES;i++){
    let complete: boolean | undefined;
    if (reqId !== undefined) {
      try { complete = await (cAsOwner as any).pendingRequestComplete?.(reqId); } catch {}
    }
    const {v0,v1} = await readTallies(cAsOwner);
    if (complete || (v0+v1)>0) {
      console.log("Decryption complete.");
      console.log(`Decrypted tallies → Candidate 0: ${v0}, Candidate 1: ${v1}`);
      return;
    }
    console.log(`  …not ready yet (${i}/${MAX_TRIES})`);
    await sleep(POLL_MS);
  }
  console.warn("Timed out waiting for decryption.");
  const {v0,v1} = await readTallies(cAsOwner);
  console.log(`Current decrypted tallies → Candidate 0: ${v0}, Candidate 1: ${v1}`);
}

main().catch((e)=>{ console.error(e); process.exit(1); });

