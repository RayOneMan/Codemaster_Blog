import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import "./NotFound.scss";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <div className="page">
      <div className="container">
        <div className="not-found-page">
          <div className="not-found-page__title">Error 404: </div>
          <div className="not-found-page__item"> {t("NOT_FOUND")}</div>
          <Link to="/posts" className="comeback-to-main-page__btn"><div className="comeback-btn-text"> {t("COMEBACK_TO_MAIN")} </div></Link>
        </div>
      </div>
    </div>
  );
}
