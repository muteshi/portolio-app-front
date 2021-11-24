import React from "react";

const Loader = ({ loading, color = "#ee3c23" }) => {
  return (
    <div className="d-flex justify-content-center center-screen">
      <div
        className="spinner-grow text-info"
        role="status"
        loading={loading}
      ></div>
    </div>
  );
};

export default React.memo(Loader);
