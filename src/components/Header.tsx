import React from "react";
import logo from "../logo.png";

export default function Header() {
  return (
    <div className="header_container">
      <div className="header_container__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_container__title">
        <h1>Hamburg Architecture</h1>
      </div>
      <div className="header_container__links">
        <a className="header_container__link" href="/">Map</a>
        <a className="header_container__link" href="/">About</a>
        <a className="header_container__link" href="/">Contact</a>
      </div>

    </div>
  );
}