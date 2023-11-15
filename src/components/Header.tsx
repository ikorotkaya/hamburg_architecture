import React from "react";
import logo from "../logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  return (
    <div className="header_container">
      <div className="header_container__logo">
        <img src={logo} alt="logo" />
      </div>
      <p className="header_container__title">
        Hamburg Architecture
      </p>
      <LanguageSwitcher  />
    </div>
  );
}