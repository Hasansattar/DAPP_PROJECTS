import logo from "./../images/rog_token.png";
import gfx from "./../images/gfx-d-dark.png";
import bitcoin from "./../images/icon-bitcoin.png";
import { ethers } from "ethers";
import { useContext, useEffect, useState } from "react";
import Web3Modal from "web3modal";
import { GlobalContext } from "../context/GlobalContext";

import {NETWORK_ID} from "./../abi/config.js";

const HeaderComponent = ({ setError, setErrMsg }) => {
  const {
    account,
    network,
    contract,
    delAccount,
    addAccount,
    addNetwork,
    delNetwork,
    addContract,
    delContract,
    addProvider,
    delProvider,
  } = useContext(GlobalContext);

  const [mmOpen, setMmOpen] = useState(false);

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask");
      return;
    }
    const web3modal = new Web3Modal();
    const instance = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(instance);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    addAccount({
      id: address,
    });

    const networkk = await provider.getNetwork();
    addNetwork(networkk);
    console.log(networkk);
    addProvider(provider);

    if (networkk.chainId !== NETWORK_ID) {
      setError(true);
      setErrMsg("Contract is not deployed on this network.");
    } else {
      setError(false);
      setErrMsg("");
    }
  };

  const disconnectWallet = () => {
    delAccount();
    delContract();
    delProvider();
    delNetwork();
  };

  const openMobileMenu = (e) => {
    setMmOpen(!mmOpen);
  };

  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        addAccount({
          id: accounts[0],
        });
      });
      window.ethereum.on("chainChanged", (chainId) => {
        window.location.reload();
      });
    }
    const self = document.querySelector("a.navbar-toggle");
    if (mmOpen) {
      self.classList.add("navbar-active");
      document.body.classList.add("overlay-menu-shown");
      document
        .querySelector("#example-menu-04")
        .parentElement.classList.add("menu-shown");
    } else {
      self.classList.remove("navbar-active");
      document.body.classList.remove("overlay-menu-shown");
      document
        .querySelector("#example-menu-04")
        .parentElement.classList.remove("menu-shown");
    }
  }, [account, mmOpen]);

  return (
    <header
      className="nk-header page-header is-transparent is-sticky is-shrink is-dark"
      id="header"
    >
      <div className="header-main">
        <div className="header-container container">
          <div className="header-wrap">
            <div
              className="header-logo logo animated"
              data-animate="fadeInDown"
              data-delay=".65"
            >
              <a href="./" className="logo-link">
                <img className="logo-light" src={logo} alt="logo" />
              </a>
            </div>
            <div className="header-nav-toggle">
              <a
                href="#"
                className="navbar-toggle"
                style={{
                  background: "rgba(0,0,0,0)",
                }}
                data-menu-toggle="example-menu-04"
                onClick={() => setMmOpen(!mmOpen)}
              >
                <div
                  className="toggle-line"
                  style={{
                    zIndex: -1,
                  }}
                >
                  <span> </span>
                </div>
              </a>
            </div>
            <div className="header-navbar header-navbar-s1">
              <nav className="header-menu" id="example-menu-04">
                <ul
                  className="menu menu-s2 animated"
                  data-animate="fadeInDown"
                  data-delay=".75"
                >
                  <li className="menu-item">
                    <a className="menu-link nav-link" href="#ico">
                      About
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link nav-link" href="#token">
                      Token Sale
                    </a>
                  </li>
                  <li className="menu-item">
                    <a className="menu-link nav-link" href="#roadmap">
                      Roadmap
                    </a>
                  </li>
                </ul>
                <ul
                  className="menu-btns animated"
                  data-animate="fadeInDown"
                  data-delay=".85"
                >
                  <li>
                    {account ? (
                      <button
                        className="btn btn-rg btn-auto btn-outline btn-grad on-bg-theme btn-round"
                        onClick={() => disconnectWallet()}
                      >
                        <span>
                          {account.slice(0, 5) + "...." + account.slice(37, 42)}
                        </span>
                      </button>
                    ) : (
                      <button
                        className="btn btn-rg btn-auto btn-outline btn-grad on-bg-theme btn-round"
                        onClick={() => connectWallet()}
                      >
                        <span> Connect Wallet </span>
                      </button>
                    )}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="header-banner mask-c-blend-dark" id="ico">
        <div className="nk-banner">
          <div className="banner banner-mask-fix banner-fs banner-single tc-light">
            <div className="banner-wrap">
              <div className="container">
                <div className="row flex-lg-nowrap align-items-center justify-content-center gutter-vr-30px">
                  <div className="col-lg-6 order-lg-last">
                    <div
                      className="banner-gfx banner-gfx-re-s3 animated"
                      data-animate="fadeInUp"
                      data-delay="1.25"
                    >
                      <img src={gfx} alt="header" />
                      <img
                        className="banner-gfx-icon banner-gfx-icon-1"
                        src={logo}
                        alt=""
                      />
                      <img
                        className="banner-gfx-icon banner-gfx-icon-2"
                        src={bitcoin}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="banner-caption wide-auto text-center text-lg-left">
                      <div className="cpn-head mt-0">
                        <h1
                          className="text-yellow-500 title title-xl-2 title-semibold animated"
                          data-animate="fadeInUp"
                          data-delay="1.35"
                        >
                          ROG - Ride of Gamers token is a utility token
                        </h1>
                      </div>
                      <div className="cpn-text cpn-text-s1">
                        <p
                          className="lead animated"
                          data-animate="fadeInUp"
                          data-delay="1.45"
                        >
                          protocol to its gaming ecosysytem.We aim to provide
                          users with a different used of your token.
                        </p>
                      </div>
                      {/* <div className="cpn-social">
                                                            <ul className="social">
                                                                <li className="animated" data-animate="fadeInUp" data-delay="1.65"><a href="#"><em className="social-icon fab fa-facebook-f"></em></a></li>
                                                                <li className="animated" data-animate="fadeInUp" data-delay="1.7"><a href="#"><em className="social-icon fab fa-twitter"></em></a></li>
                                                                <li className="animated" data-animate="fadeInUp" data-delay="1.75"><a href="#"><em className="social-icon fab fa-youtube"></em></a></li>
                                                                <li className="animated" data-animate="fadeInUp" data-delay="1.8"><a href="#"><em className="social-icon fab fa-github"></em></a></li>
                                                                <li className="animated" data-animate="fadeInUp" data-delay="1.85"><a href="#"><em className="social-icon fab fa-bitcoin"></em></a></li>
                                                                <li className="animated" data-animate="fadeInUp" data-delay="1.9"><a href="#"><em className="social-icon fab fa-medium-m"></em></a></li>
                                                            </ul>
                                                        </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="nk-ovm mask-c-dark shape-v mask-contain-bottom"> </div>
        <div className="mergeImage"> </div>
        <div
          id="particles-bg"
          className="particles-container particles-bg"
          data-pt-base="#eab308"
          data-pt-base-op=".3"
          data-pt-line="#eab308"
          data-pt-line-op=".5"
          data-pt-shape="#eab308"
          data-pt-shape-op=".2"
        ></div>
      </div>
    </header>
  );
};

export default HeaderComponent;
