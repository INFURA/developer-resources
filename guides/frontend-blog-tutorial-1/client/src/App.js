import React from 'react';
import './App.css';
 
import { useWeb3 } from '@openzeppelin/network/react';
import Web3Data from './components/Web3Data.js';

 
const infuraProjectId = '1dccaab9dab249d395d61e81bdcfa5e7';
 
function App() {
 
  const web3Context = useWeb3(`wss://mainnet.infura.io/ws/v3/${infuraProjectId}`);
 
  return (
    <div className="App">
      <div>
        <h1>Infura React Dapp with Components!</h1>
        <Web3Data title="Web3 Data" web3Context={web3Context} />
      </div>
    </div>
  );
}
 
export default App;