import React from "react";

const Card = ({ title, text, icon }) => {
  return (
    <div className="card bg-roadmap shadow minHeight270 text-center ">
      <div
        className=""
        style={{
          fontSize: "60px",
        }}
      >
        {" "}
        {icon}{" "}
      </div>{" "}
      <div className="card-body">
        <h5 className="card-title text-yellow-500"> {title} </h5>{" "}
        <p className="card-text text-white"> {text} </p>
      </div>{" "}
    </div>
  );
};

export default Card;
