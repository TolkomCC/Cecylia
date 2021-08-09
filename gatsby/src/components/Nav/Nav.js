import React, { useState, useRef } from "react";
import { Link } from "gatsby";
import { MenuItems } from "./MenuItems";
import "./Nav.scss";

import imgOne from "../../assets/img/img-1.jpg";
import imgTwo from "../../assets/img/img-2.jpg";
import imgThree from "../../assets/img/img-3.jpg";
import imgFour from "../../assets/img/img-4.jpg";

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
    img.current.className = "img-container"
  }

  const handleHover = (e) => {
    switch (e.target.textContent) {
      case "Accueil":
        img.current.style.backgroundImage = `url(${imgOne})`;
        img.current.className = "img-container animated"
        break;
      case "Séries":
        img.current.style.backgroundImage = `url(${imgTwo})`;
        img.current.className = "img-container animated"
        break;
      case "Illustrations":
        img.current.style.backgroundImage = `url(${imgThree})`;
        img.current.className = "img-container animated"
        break;
      case "Instagram":
        img.current.style.backgroundImage = `url(${imgFour})`;
        img.current.className = "img-container animated"
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
        <div className="img-container" ref={img}></div>
        <div className="links">
          {MenuItems.map((item, index) => {
            return (
              <Link to={item.url} key={index} onMouseOver={handleHover} onMouseOut={handleOut} onFocus={handleHover}>
                {item.title}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Nav;
