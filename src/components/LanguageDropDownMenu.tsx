import React from "react";

import { useTranslation } from "react-i18next";
import { LanguageDropDownMenuProps } from "../types";

export default function LanguageDropDownMenu({
  setMenuOpen,
}: LanguageDropDownMenuProps) {
  const { t, i18n } = useTranslation();
  const changeLanguage = (lng: string) => i18n.changeLanguage(lng);

  const handleChange = (language: string) => {
    changeLanguage(language);
    setMenuOpen(false);
  };

  const availableLanguages =
    typeof i18n.options.resources === "object"
      ? Object.keys(i18n.options.resources)
      : [];

  return (
    <div className="language-menu-dropdown">
      {availableLanguages.map((language) => (
        <div
          className="language-menu-dropdown__language"
          key={language}
          onClick={() => handleChange(language)}
        >
          {t(language)}
        </div>
      ))}
    </div>
  );
}
