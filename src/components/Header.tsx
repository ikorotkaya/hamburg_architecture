import React from "react";
import logo from "../logo.svg";

export default function Header() {
  return (
    <div className="header_container">
      <div className="header_container__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_container__title">
        Hamburg Architecture
      </div>
    </div>
  );
}