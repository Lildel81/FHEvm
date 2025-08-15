import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { ChakraProvider, Container, Heading, VStack } from '@chakra-ui/react';
import { Devnet } from './components/Devnet';
import Voting from './components/Voting';
import { Connect } from './components/Connect';
import { init } from './fhevmjs';
import './App.css';
<VotingApp account={account} provide={provider} />

function App() {
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => setIsInitialized(true))
      .catch(() => setIsInitialized(false));
  }, []);

  if (!isInitialized) return null;

  return (
    <ChakraProvider>
      <BrowserRouter>
        <Container maxW="container.md" py={8}>
          <nav>
            <VStack spacing={4} align="start">
              <Link to="/">Home</Link>
              <Link to="/vote">Vote</Link>
              <Link to="/dashboard">Dashboard</Link>
            </VStack>
          </nav>

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Heading mb={4}>Confidential ERC20 dApp</Heading>
                  <Connect>
                    {(account, provider) => (
                      <Devnet account={account} provider={provider} />
                    )}
                  </Connect>
                </>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route
              path="/vote"
              element={
                <Connect>
                  {(account, provider) => (
                    <Voting account={account} provider={provider} />
                  )}
                </Connect>
              }
            />
          </Routes>

          <p className="read-the-docs">
            <a href="https://docs.zama.ai/fhevm" target="_blank" rel="noreferrer">
              See the documentation for more information
            </a>
          </p>
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  );
}

// Basic placeholder pages
function About() {
  return (
    <div>
      <Heading>About Page</Heading>
      <p>This is the about page content.</p>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <Heading>Dashboard</Heading>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}

export default App;

