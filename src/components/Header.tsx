import React from "react";
import logo from "../logo.svg";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t } = useTranslation();
  return (
    <div className="header_container">
      <div className="header_container__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="header_container__title">
      <p>{t("title")}</p>
      </div>
      <LanguageSwitcher  />
    </div>
  );
}