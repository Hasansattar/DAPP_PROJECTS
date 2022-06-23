import { useRef, useState, useContext } from "react";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import { GlobalContext } from "../context/GlobalContext";
import metamaskIcon from "./../images/metamask.svg";
import {CROWDSALE_CONTRACT_ADDRESS,TOKEN_CONTRACT_ADDRESS,TOKEN_SYMBOL,TOKEN_DECIMAL} from "./../abi/config.js";
import CROWDSALE_ABI from "./../abi/abi.json";
import "./token.css";
const crowdsaleAddress = CROWDSALE_CONTRACT_ADDRESS;

const Token = ({ error }) => {
  const { account } = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const ethPrice = useRef(null);

  const addToken = async () => {
    const tokenAddress = TOKEN_CONTRACT_ADDRESS;
    const tokenSymbol = TOKEN_SYMBOL;
    const tokenDecimals = TOKEN_DECIMAL;
    const tokenImage = "";

    try {
      // wasAdded is a boolean. Like any RPC method, an error may be thrown.
      const wasAdded = await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20", // Initially only supports ERC20, but eventually more!
          options: {
            address: tokenAddress, // The address that the token is at.
            symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 chars.
            decimals: tokenDecimals, // The number of decimals in the token
            image: tokenImage, // A string url of the token logo
          },
        },
      });

      if (wasAdded) {
        console.log("Thanks for your interest!");
      } else {
        console.log("Your loss!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const buyToken = async (e) => {
    try {
      e.preventDefault();
      if (!window.ethereum) {
        alert("Please install MetaMask");
        return;
      }
      if (!account) {
        alert("Please connnect wallet");
        return;
      }

      if (error) {
        alert("something went wrong. please check the network.");
        return;
      }

      setLoading(true);
      const web3modal = new Web3Modal();
      const instance = await web3modal.connect();
      const provider = new ethers.providers.Web3Provider(instance);
      const signer = provider.getSigner();
      const contract = new ethers.Contract(
        crowdsaleAddress,
        CROWDSALE_ABI,
        signer
      );
      const price = ethers.utils.parseEther(ethPrice.current.value);
      const balance = ethers.utils.formatEther(
        await provider.getBalance(signer.getAddress())
      );

      if (balance < ethPrice.current.value) {
        setLoading(false);
        alert("Insufficient Balance");
        return;
      }

      const transaction = await contract.buyTokens(account, {
        value: price.toString(),
      });
      await transaction.wait();

      setLoading(false);
      alert("purchase done");
    } catch (e) {
      setLoading(false);
    }
  };

  return (
    <section
      className=" section section-tokensale tc-light mask-c-blend-dark"
      id="token"
    >
      <div className="container">
        <div className="section-head text-center wide-auto-sm">
          <h2
            className="title title-s4 animated text-yellow-500"
            data-animate="fadeInUp"
            data-delay=".1"
            title="TOKEN"
          >
            {" "}
            Token Sale{" "}
          </h2>
        </div>{" "}
        <div className="nk-block nk-block-token mgb-m30">
          <div className="row align-items-center justify-content-between gutter-vr-50px">
            <div className="col-lg-6">
              <div className="row gutter-vr-30px">
                <div className="col-sm-6">
                  <div
                    className="stage-info animated"
                    data-animate="fadeInUp"
                    data-delay=".3"
                  >
                    <h6 className="title title-s6 title-xs-s2">
                      {" "}
                      Contract Address{" "}
                    </h6>{" "}
                    <p
                      style={{
                        wordBreak: "break-all",
                      }}
                    >
                      {" "}
                      0x2cDA9F1720ec462cbCC2AFeFECF103209Af561Dd{" "}
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-sm-6">
                  <div
                    className="stage-info animated"
                    data-animate="fadeInUp"
                    data-delay=".4"
                  >
                    <h6 className="title title-s6 title-xs-s2">
                      {" "}
                      Total Supply{" "}
                    </h6>{" "}
                    <p> 900, 000, 000 </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-sm-6">
                  <div
                    className="stage-info animated"
                    data-animate="fadeInUp"
                    data-delay=".5"
                  >
                    <h6 className="title title-s6 title-xs-s2"> Network </h6>{" "}
                    <p> Binance Smartchain </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-sm-6">
                  <div
                    className="stage-info animated"
                    data-animate="fadeInUp"
                    data-delay=".6"
                  >
                    <h6 className="title title-s6 title-xs-s2">
                      {" "}
                      Token Symbol{" "}
                    </h6>{" "}
                    <p> ROG </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-sm-6">
                  <div
                    className="stage-info animated"
                    data-animate="fadeInUp"
                    data-delay=".7"
                  >
                    <h6 className="title title-s6 title-xs-s2"> Decimal </h6>{" "}
                    <p> 9 </p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="col-sm-6">
                  <div
                    className="stage-info animated"
                    data-animate="fadeInUp"
                    data-delay=".8"
                  >
                    <h6 className="title title-s6 title-xs-s2">
                      {" "}
                      Minimal transaction amount{" "}
                    </h6>{" "}
                    <p> 0.01 BNB </p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
            <div className="col-lg-5">
              <div
                className="token-status token-status-s5 games-bg round no-bd animated text-left"
                data-animate="fadeInUp"
                data-delay=".9"
              >
                <button
                  className="w-50 ml-auto text-white d-flex flex-row align-items-center justify-content-center px-4 py-1 border btn-round metamask-bg on-bg-theme"
                  onClick={() => addToken()}
                >
                  <img
                    className="metamask-width mr-2"
                    src={metamaskIcon}
                    alt="metamask"
                  />
                  Add ROG{" "}
                </button>{" "}
                <form onSubmit={buyToken}>
                  <div className="mb-3">
                    <label className="text-yellow-500"> Amount BNB </label>{" "}
                    <input
                      ref={ethPrice}
                      type="text"
                      className="w-100 h-12 rounded p-2 txtBoxAmount"
                      required
                    />
                  </div>{" "}
                  <div className="mb-3">
                    <label className="text-yellow-500"> Rate </label>{" "}
                    <input
                      className="w-100 h-12 rounded p-2 text-white"
                      type="text"
                      value="$0.01"
                      disabled
                    />
                  </div>
                  <div className="mt-4">
                    <button
                      disabled={loading}
                      className="w-100 py-2 px-6 btnBuy"
                    >
                      {" "}
                      {loading ? "Busy" : "Buy"}{" "}
                    </button>
                  </div>{" "}
                </form>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>
      </div>{" "}
    </section>
  );
};

export default Token;
