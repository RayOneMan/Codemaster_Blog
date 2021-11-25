import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./Menu.scss";
import Translate from "../Translate/Translate";
export default function Menu({ items, active, setActive }) {
  const { t } = useTranslation();
  return (
    <div className={active ? "menu active" : "menu"}
      onClick={() => setActive(false)}>
      <div className="blur" />
      <div className="menu__content" onClick={(e) => e.stopPropagation()}>
        <ul>

          {items.map((item) =>
            <li key={item.link}>
              <Link className="menu__items"
                to={item.link}>
                {t(item.translate)}
              </Link>
            </li>
          )}
          <li className="menu__translate">
            <Translate />
          </li>
        </ul>
      </div>
    </div>
  );
}
