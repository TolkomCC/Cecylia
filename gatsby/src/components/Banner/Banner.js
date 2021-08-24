import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./Banner.scss";

const Banner = ({ title }) => {
  return (
    <div className="banner-container">
      <div className="ode-logo">
        <div className="ode-banner">
          <p>Ôde à la Création</p>
        </div>
        <div className="logo">
          <StaticImage src="../../assets/img/Logo.png" alt="Logo" placeholder="blurred" layout="constrained" />
        </div>
      </div>
      <div className="title">
        <h1>{title}</h1>
        <h2>révélé par la lumière.</h2>
      </div>
    </div>
  );
};

export default Banner;
