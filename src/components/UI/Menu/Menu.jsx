import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import LanguageSelector from "../LanguageSelector/LanguageSelector";

import "./Menu.scss";

export default function Menu({ items, active, setActive }) {
  const { t } = useTranslation();
  return (
    <div className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}>
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <ul>
          <li className="menu__translate">
            <LanguageSelector />
          </li>
          {items.map((item) =>
            <li key={item.link}>
              <Link className="menu__items"
                to={item.link}>
                {t(item.translate)}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
