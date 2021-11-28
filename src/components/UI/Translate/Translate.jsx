import React from "react";
import { useTranslation } from "react-i18next";
import "./Translate.scss";

export default function Translate() {
  const { i18n } = useTranslation();
  return (
    <div>
      <select className="translate__menu" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
        <option className="translate__menu_item" value="en">English</option>
        <option className="translate__menu_item" value="ru">Russian</option>
        <option className="translate__menu_item" value="de">Deutsch</option>
      </select>
    </div>
  );
}
