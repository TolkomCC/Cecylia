import React from "react";
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image";

import "./Banner.scss";

const Banner = ({ title }) => {
  return (
    <div className="banner-container">
      <div className="ode-logo">
        <div className="ode-banner">
          <Link to="/ode">Ôde à la Création</Link>
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
