import "./GamesCard.css";
import logo from "./../../images/rog_token.png";
import PerfectScrollbar from "react-perfect-scrollbar";

import "react-perfect-scrollbar/dist/css/styles.css";

const GamesCard = ({ title, text, image }) => {
  return (
    <div className="card card-custom bg-roadmap p-0 ">
      <div
        className="card-custom-img"
        style={{
          backgroundImage: `url(${image})`,
          backgroundColor: "black",
        }}
      >
        
      </div>
      <div className="card-custom-avatar">
        <img className="img-fluid" src={logo} alt="Avatar" />
      </div>
      <PerfectScrollbar>
        <div
          className="card-body p-3 mt-2"
          style={{
            overflowY: "auto",
          }}
        >
          <h4 className="card-title text-yellow-500"> {title} </h4>
          <p className="card-text text-white"> {text} </p>
        </div>
      </PerfectScrollbar>
    </div>
  );
};

export default GamesCard;
