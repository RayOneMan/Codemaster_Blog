import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function NotFound() {
    const { t } = useTranslation();
    return (
        <div className="page">
            <div className="container">
                <div className="content">
                    <div className="content__title">Error 404:
                        <div className="content__item"> {t("NOT_FOUND")}</div>
                    </div>
                    <Link to="/posts" className="comeback"> {t("COMEBACK_TO_MAIN_PAGE")}</Link>
                </div>
            </div>
        </div>
    );
}
