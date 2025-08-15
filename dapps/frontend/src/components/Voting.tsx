import { useState } from 'react';
import { 
  Box, Button, VStack, Text, Heading, 
} from '@chakra-ui/react';

import { useVotingContract } from '@/hooks/useVotingContract';

export default function VotingApp() {
  const voting = useVotingContract();
  const [status, setStatus] = useState('Idle');
  const [decrypted0, setDecrypted0] = useState<number | null>(null);
  const [decrypted1, setDecrypted1] = useState<number | null>(null);

  const handleVote = async (candidate: 0 | 1) => {
    if (!voting) return;
    try {
      setStatus(`Voting for Candidate ${candidate}...`);
      const tx = await voting.vote(candidate);
      await tx.wait();
     window.alert(`Voted for Candidate ${candidate}, status: success`);
    } catch (err: any) {
      window.alert('Vote Failed' );
    } finally {
      setStatus('Idle');
    }
  };

  const handleStartElection = async () => {
    if (!voting) return;
    try {
      const tx = await voting.startElection();
      await tx.wait();
      window.alert('Election Started, status success');
    } catch (err: any) {
      window.alert('Start failed');
    }
  };

  const handleEndElection = async () => {
    if (!voting) return;
    try {
      const tx = await voting.endElection();
      await tx.wait();
       window.alert('Election Ended' );
    } catch (err: any) {
      window.alert('End failed');
    }
  };

  const handleDecrypt = async () => {
    if (!voting) return;
    try {
      setStatus('Requesting decryption...');
      const tx0 = await voting.requestDecryption(0);
      const tx1 = await voting.requestDecryption(1);
      await Promise.all([tx0.wait(), tx1.wait()]);
       window.alert('Requested decryption. Waiting for response...');
      await new Promise((res) => setTimeout(res, 10000));

      const value0 = await voting.decryptedVotes(0);
      const value1 = await voting.decryptedVotes(1);
      setDecrypted0(Number(value0));
      setDecrypted1(Number(value1));
    } catch (err: any) {
      window.alert('Decryption failed');
    } finally {
      setStatus('Idle');
    }
  };

  return (
    <VStack p={8} spacing={6} align="center">
      <Heading size="lg">Encrypted Voting App</Heading>
      <Text>Status: {status}</Text>

      <Button colorScheme="green" onClick={() => handleVote(0)}>
        Vote for Candidate A
      </Button>
      <Button colorScheme="blue" onClick={() => handleVote(1)}>
        Vote for Candidate B
      </Button>

      <Button onClick={handleStartElection} colorScheme="orange">
        Start Election
      </Button>
      <Button onClick={handleEndElection} colorScheme="red">
        End Election
      </Button>

      <Button onClick={handleDecrypt} colorScheme="purple">
        Decrypt Results
      </Button>

      <Box mt={6}>
        <Text>Decrypted Candidate A Votes: {decrypted0 ?? 'Pending'}</Text>
        <Text>Decrypted Candidate B Votes: {decrypted1 ?? 'Pending'}</Text>
      </Box>
    </VStack>
  );
}

