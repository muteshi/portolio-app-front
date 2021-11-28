import React from "react";
const Loader = ({ color = "#ee3c23" }) => {
  return (
    <div
      className="d-flex justify-content-center center-screen"
      style={{ color: color }}
    >
      <div className="spinner-grow text-info" role="status"></div>
    </div>
  );
};

export default React.memo(Loader);
