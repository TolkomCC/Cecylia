import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import { MenuItems } from "./MenuItems";
import "./Nav.scss";

import imgInsta from "../../assets/img/nav/img-insta.jpg";
import imgIllu from "../../assets/img/nav/img-illu.jpg";
import imgSeries from "../../assets/img/nav/img-series.jpg";
const Nav = () => {
  const [active, setActive] = useState("burger");
  const [list, setList] = useState("list");

  const img = useRef(null);

  const handleClick = () => {
    setActive(active === "burger" ? "burger active" : "burger");

    setTimeout(() => {
      setList(list === "list" ? "list list-open" : "list");
    }, 500);
  };

  const handleOut = () => {
    img.current.className = "img-container";
  };

  const handleHover = (e) => {
    switch (e.target.textContent) {
      case "Séries":
        img.current.style.backgroundImage = `url(${imgSeries})`;
        img.current.className = "img-container animated";
        break;
      case "Illustrations":
        img.current.style.backgroundImage = `url(${imgIllu})`;
        img.current.className = "img-container animated";
        break;
      case "Instagram":
        img.current.style.backgroundImage = `url(${imgInsta})`;
        img.current.className = "img-container animated";
        break;
      default:
    }
  };

  return (
    <>
      <button className={active} tabIndex={0} aria-label="burger-trigger-animation" onClick={handleClick}>
        <div className="rectangle-one"></div>
        <div className="rectangle-two"></div>
        <div className="rectangle-three"></div>
        <div className="cross-one"></div>
        <div className="cross-two"></div>
      </button>
      <div className={list}>
        <div className="featured-inner-left">
          <div className="img-container" ref={img}></div>
        </div>
        <div className="logo-container">
          <StaticImage src="../../assets/img/Logo.png" alt="Logo" placeholder="blurred" layout="constrained" />
        </div>
        <div className="links">
          <p className="ode">Ôde à la création</p>
          {MenuItems.map((item, index) => {
            return (
              <Link to={item.url} key={index} onMouseOver={handleHover} onMouseOut={handleOut} onFocus={handleHover}>
                {item.title}
              </Link>
            );
          })}
          <a className="mail" href="mailto: Cyl.llustrations@gmail.com">
            Cyl.llustrations@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Nav;
