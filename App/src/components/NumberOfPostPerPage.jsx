import "./NumberOfPostPerPage.scss";
import { useTranslation } from "react-i18next";

export default function NumberOfPostPerPage() {
    const {t} = useTranslation();
    return (
        <select className="search__select" defaultValue={"DEFAULT"}>
            <option value="DEFAULT" disabled>{t("POST_DESCRIPTION")}</option>
            <option value="1">5</option>
            <option value="2">10</option>
            <option value="3">25</option>
        </select>
    );
}
