import React from "react";
import { Link } from "gatsby";
import Logo from "../../assets/img/Logo.png";

import Button from "../Button/Button";

import "./Footer.scss";

const Footer = ({ pageActive }) => {
  return (
    <div className="footer">
      <div className="page-resume">
        <div className="logo-container">
          <img src={Logo} />
        </div>
        <h1>
          Toutes <br /> Les {pageActive}
        </h1>
      </div>

      <div className="contact">
        <span> Pour échanger :</span>
        <Button mail="cyl_illustrations@gmail.com" />
      </div>

      {/*Les 3 colonnes avec liens*/}
      <div className="links">
        <div className="links-container">
          {/* Column1 */}
          <div className="col">
            <Link to="/series">Séries</Link>
            <Link to="/illustrations"> Illustrations</Link>
          </div>

          {/* Column2 */}
          <div className="col">
            <Link to="/illustrations">Ôde à la création</Link>
          </div>

          {/* Column3 */}
          <div className="col">
            <Link to="/mentions">Mentions légales</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
