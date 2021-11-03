import "./Sorting.scss";
import { useTranslation } from "react-i18next";

export default function Sorting() {
    const {t} = useTranslation();
    return (
        <select className="search__select" defaultValue={"DEFAULT"} >
            {/*плохая идея, лучше сделать label рядом, а не хакать поведение стандартных контролов для внешнего вида*/}
            <option value="DEFAULT" disabled>{t("SORT")}</option>
            <option value="1">{t("SORT_BY_TITLE")}</option>
            <option value="2">{t("SORT_BY_DISCRIPTION")}</option>
        </select>
    );
}
