import "./Header.scss";
import { useTranslation } from "react-i18next";

import "./UI/Select/Select.scss";
import { Link } from "react-router-dom";
import Menu from "./UI/Menu/Menu";
import { useState } from "react";
import Translate from "./UI/Translate/Translate";

export default function Header() {
  const { t } = useTranslation();
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { link: "/posts", translate: "LIST_POSTS" },
    { link: "/about", translate: "ABOUT" },
    { link: "/error", translate: "NOT_FOUND" }
  ];
  // Как правильно передать переведеный текст?

  return (
    <header className="header">
      <Link to="/posts" className="header__logo">
        <div className="logo">
          {t("LOGO")}
        </div>
      </Link>
      <ul className="header__list">
        <li className="header__item">
          <Translate />
        </li>
        <li className="header__item">
          <Link to="/posts" className="header__link">{t("LIST_POSTS")}</Link>
        </li>
        <li className="header__item">
          <Link to="/about" className="header__link">{t("ABOUT")}</Link>
        </li>
      </ul>
      <div
        className="header__burger-btn material-icons"
        onClick={() => setMenuActive(!menuActive)}
      >
        menu
        <Menu
          active={menuActive}
          setActive={setMenuActive}
          items={items}>
        </Menu>
      </div>
    </header>
  );
}
