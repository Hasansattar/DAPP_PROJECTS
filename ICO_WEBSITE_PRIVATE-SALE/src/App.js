import "./App.css";
import Preloader from "./components/Preloader";
import HeaderComponent from "./components/HeaderComponent";
import WhyBinance from "./components/WhyBinance";
import Token from "./components/Token";
import TokenMetrics from "./components/TokenMetrics";
import Utilities from "./components/Utilities";
import FooterComponent from "./components/FooterComponent";
import Roadmap from "./components/Roadmap";
import AlertComponent from "./components/Alert";

import { useContext, useEffect, useState } from "react";
import { GlobalProvider } from "./context/GlobalContext";

function App() {
  const [error, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    if (!window.ethereum) {
      alert("Please install MetaMask");
    }
  }, []);

  return (
    <GlobalProvider>
      <div className="nk-wrap">
        <HeaderComponent setError={setError} setErrMsg={setErrMsg} />
        <main className="nk-pages">
          <WhyBinance />
          <Token error={error} /> <TokenMetrics />
          <Utilities />
          <Roadmap />
        </main>
        <FooterComponent />
      </div>
      {error && <AlertComponent msg={errMsg} />} <Preloader />
    </GlobalProvider>
  );
}

export default App;
