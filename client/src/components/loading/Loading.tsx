import React from "react";
import "./loading.scss";

const Loading = () => {
  return (
    <div className="loading">
      <div className="loader">
        <div className="inner one"></div>
        <div className="inner two"></div>
        <div className="inner three"></div>
      </div>
    </div>
  );
};

export default Loading;
