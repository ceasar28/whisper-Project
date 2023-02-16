import { Contract, ethers } from "ethers";
import React, { useEffect, useState } from "react";
import "./App.css";
import abi from "./utils/wavePortal.json";

const getEthereumObject = () => window.ethereum;

/*
 * This function returns the first linked account found.
 * If there is no account linked, it will return null.
 */
const findMetaMaskAccount = async () => {
  try {
    const ethereum = getEthereumObject();

    /*
     * First make sure we have access to the Ethereum object.
     */
    if (!ethereum) {
      console.error("Make sure you have Metamask!");
      return null;
    }

    console.log("We have the Ethereum object", ethereum);
    const accounts = await ethereum.request({ method: "eth_accounts" });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      return account;
    } else {
      console.error("No authorized account found");
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
};

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  // a state property to store waves
  const [allWaves, setAllWaves] = useState([]);
  // state property to store message
  const [message, setMessage] = useState("");
  // a variable that holds the contract address
  const contractAddress = "0x759Dc4c2156144017195Dd723D5f6002C86c08Fb";

  // a variable that holds that reference the abi content
  const contractABI = abi.abi;

  // function to get the message from a user
  const userMessage = async (e) => {
    e.preventDefault();
  };

  // a method that gets all waves from our contract
  const getAllWaves = async () => {
    try {
      const { ethereum } = window;
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        //calling the getAllWaves method from my Smart Contract
        const waves = await wavePortalContract.getAllWaves();

        // only address, timestamp and message is needed in my UI
        let wavesCleaned = [];
        waves.forEach((wave) => {
          wavesCleaned.push({
            address: wave.waver,
            timestamp: new Date(wave.timestamp * 1000),
            message: wave.message,
          });
        });

        // store the date in a react state
        setAllWaves(wavesCleaned);
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const ethereum = getEthereumObject();
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
      getAllWaves(); // this calls the getallwaves method
    } catch (error) {
      console.error(error);
    }
  };

  // function to interact with our smartContract
  const wave = async (a) => {
    try {
      const { ethereum } = window;

      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();

        // this is where the abi is been used.
        const wavePortalContract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );

        let count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count...", count.toNumber());

        // executing the actual wave from my smart contract
        const waveTxn = await wavePortalContract.wave(a);
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined --", waveTxn.hash);
        getAllWaves();

        count = await wavePortalContract.getTotalWaves();
        console.log("Retrieved total wave count ...", count.toNumber());
      } else {
        console.log("Ethereum object doesn,t exist!");
      }
    } catch (error) {
      console.log(error);
    }
  };
  // to handle message submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(" ");
    console.log(message);
    wave(message);
    return;
  };

  /*
   * This runs our function when the page loads.
   * More technically, when the App component "mounts".
   */
  useEffect(async () => {
    const account = await findMetaMaskAccount();
    if (account !== null) {
      setCurrentAccount(account);
      getAllWaves();
    }
  }, []);

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">🤐🤫 Whisperrrr!</div>

        <div className="bio">
          Whisper! your thought nobody will know, let it off your chest
        </div>

        {/* <button className="waveButton" onClick={wave}>
          Wave at Me
        </button> */}

        {/*
         * If there is no currentAccount render this button
         */}
        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
        {currentAccount && (
          <form id="form" onSubmit={handleSubmit}>
            <textarea
              rows="5"
              cols="60"
              style={{
                backgroundColor: "OldLace",
                marginTop: "16px",
                padding: "8px",
                border: "0",
                borderRadius: "5px",
              }}
              className="textarea"
              id=" message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />
            <button
              style={{
                cursor: "pointer",
                marginTop: "16px",
                padding: "8px",
                border: "0",
                borderRadius: "5px",
              }}
              typeof="submit"
            >
              Send whsiper
            </button>
          </form>
        )}
        {
          // conditional render to render the waves if the person is connected
        }
        {currentAccount &&
          allWaves.map((wave, index) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "OldLace",
                  marginTop: "16px",
                  padding: "8px",
                  border: "0",
                  borderRadius: "5px",
                }}
              >
                <div>from: {wave.address}</div>
                <div>
                  <h4>{wave.message}</h4>
                </div>
                <div>Time: {wave.timestamp.toString()}</div>
              </div>
            );
          })}
        {/* {allWaves.map((wave, index) => {
          return (
            <div
              key={index}
              style={{
                backgroundColor: "OldLace",
                marginTop: "16px",
                padding: "8px",
              }}
            >
              <div>Address: {wave.address}</div>
              <div>Time: {wave.timestamp.toString()}</div>
              <div>Message: {wave.message}</div>
            </div>
          );
        })} */}
      </div>
    </div>
  );
};

export default App;
