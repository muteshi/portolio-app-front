import React from "react";
import { Redirect } from "react-router-dom";

const Toggle = ({ Icon, page, onClick }) => {
  console.log("TOGGLING");
  return (
    <div>
      <Redirect to={page} />
      <Icon
        style={{
          cursor: "pointer",
          color: "#ee3c23",
          fontSize: "25px",
          position: "absolute",
          top: "10px",
          right: "10px",
        }}
        onClick={onClick}
      />
    </div>
  );
};

export default React.memo(Toggle);
