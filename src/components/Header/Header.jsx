import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "../UI/Menu/Menu";
import Translate from "../UI/Translate/Translate";

import "./Header.scss";


export default function Header() {
  const { t } = useTranslation();
  const [menuActive, setMenuActive] = useState(false);
  const items = [
    { link: "/posts", translate: "LIST_POSTS" },
    { link: "/about", translate: "ABOUT" }
  ];

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
