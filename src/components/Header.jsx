import "./Header.scss";
import { useTranslation } from "react-i18next";

import "./UI/Select/Select.scss";

export default function Header() {
    const { t, i18n } = useTranslation();

    return (
        <header className="header">
            <a href="/#" className="header__logo">
                <div className="logo">
                    <span>{t("LOGO")}</span>
                </div>
            </a>
            <ul className="header__list">
                <li className="header__item">
                    <a href="/#" className="header__link">{t("LIST_POSTS")}</a>
                </li>
                <li className="header__item">
                    <a href="/#" className="header__link">{t("ABOUT")}</a>
                </li>
                <li className="header__item">
                    <select className="translate__menu" value={i18n.language} onChange={(e) => i18n.changeLanguage(e.target.value)}>
                        <option className="translate__item" value="en">English</option>
                        <option className="translate__item" value="ru">Russian</option>
                        <option className="translate__item" value="de">Deutsch</option>
                    </select>
                </li>
                <li className="header__item">
                    <a href="/#" className="header__link">{t("EXIT")}</a>
                </li>
            </ul>
            <div className="header__menu material-icons">menu</div>
        </header>
    );
}
