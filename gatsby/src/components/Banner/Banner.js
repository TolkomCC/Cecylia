import React from "react";

import "./Banner.scss";

const Banner = ({ title }) => {
  return (
    <div className="banner-container">
      <div className="logo">
        <p>Ôde à la Création</p>
      </div>
      <div className="title">
        <h1>{title}</h1>
        <h2>révélé par la lumière.</h2>
      </div>
    </div>
  );
};

export default Banner;
