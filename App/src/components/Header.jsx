import "./Header.scss";
import { useTranslation } from "react-i18next";



export default function Header() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

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
                    <div className= "translate"> <a href="/#" className="header__link translate__menu">{t("LANG")}</a>
                        <ol className="translate__submenu">
                            <li className="translate__item" onClick={() => changeLanguage("en")}>English</li>
                            <li className="translate__item" onClick={() => changeLanguage("ru")}>Russian</li>
                            <li className="translate__item" onClick={() => changeLanguage("de")}>Deutsch</li>
                        </ol>
                    </div>
                </li>


                <li className="header__item">
                    <a href="/#" className="header__link">{t("EXIT")}</a>
                </li>
            </ul>
            <div className="header__menu material-icons">menu</div>
        </header>
    );
}
