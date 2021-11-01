import NumberOfPostPerPage from "./NumberOfPostPerPage";
import Sorting from "./Sorting";
import { useTranslation } from "react-i18next";

import "./Search.scss";

export default function Search() {
    const {t} = useTranslation();
    return (
        <div className="search">
            <input type="text" className="search__input" placeholder={t("POST_DESCRIPTION")} />
            <Sorting />
            <NumberOfPostPerPage />
        </div>
    );
}
