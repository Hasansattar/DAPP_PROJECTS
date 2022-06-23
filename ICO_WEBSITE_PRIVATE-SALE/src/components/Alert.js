import React from "react";

const Alert = ({ msg }) => {
  return (
    <div className="alert alert-danger alert" role="alert">
      {" "}
      {msg}{" "}
    </div>
  );
};

export default Alert;
