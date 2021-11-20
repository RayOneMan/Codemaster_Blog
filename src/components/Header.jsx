import "./Header.scss";
import { useTranslation } from "react-i18next";

import "./UI/Select/Select.scss";
import { Link } from "react-router-dom";

export default function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header className="header">
            <Link to="/posts" className="header__logo">
                <div className="logo">
                    <span>{t("LOGO")}</span>
                </div>
            </Link>
            <ul className="header__list">
                <li className="header__item">

                </li>
                <li className="header__item">
                    <Link to="/posts" className="header__link">{t("LIST_POSTS")}</Link>
                </li>
                <li className="header__item">
                    <Link to="/about" className="header__link">{t("ABOUT")}</Link>
                </li>
                <select className="translate__menu" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                    <option className="translate__menu_item" value="en">English</option>         {/* Какая то хрень */}
                    <option className="translate__menu_item" value="ru">Russian</option>
                    <option className="translate__menu_item" value="de">Deutsch</option>
                </select>
                {/* <li className="header__item">
                    <Link to="/#" className="header__link exit">{t("EXIT")}</Link>
                </li> */}
            </ul>
            <div className="header__menu material-icons">menu</div>
        </header>
    );
}
