import { useMemo } from 'react';
import { ethers } from 'ethers';
import { VOTING_CONTRACT_ABI, VOTING_CONTRACT_ADDRESS } from '../contracts/EncryptedVoting';

export function useVotingContract(provider: ethers.Provider | null) {
  return useMemo(() => {
    if (!provider) return null;
    const signer = provider.getSigner();
    return new ethers.Contract(VOTING_CONTRACT_ADDRESS, VOTING_CONTRACT_ABI, signer);
  }, [provider]);
}

