import React from "react";
import "./Nav.css";
import logo from "./logo.png";

function Nav() {
  return (
    <div className="Nav">
      <a href="#home" className="brand">
        <img src={logo} alt="Movie.fy" className="brand__logo" />
        <h1 href="#" className="brand__name">Movie.fy</h1>
      </a>
      <ul className="links">
        <li className="links__link"><a href="#netflix">Netflix</a></li>
        <li className="links__link"><a href="#prime">Prime Video</a></li>
        <li className="links__link"><a href="#disney">Disney+</a></li>
        <li className="links__link"><a href="#random">Random</a></li>
      </ul>
    </div>
  );
}

export default Nav;