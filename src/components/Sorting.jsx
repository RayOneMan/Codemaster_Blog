import "./Sorting.scss";
import { useTranslation } from "react-i18next";

export default function Sorting() {
    const {t} = useTranslation();
    return (
        <select className="search__select" defaultValue={"DEFAULT"} >
            {/*плохая идея, лучше сделать label рядом, а не хакать поведение стандартных контролов для внешнего вида*/}
            <option value="DEFAULT" disabled>{t("SORT")}</option>
            <option value="1">Sort by title</option>
            <option value="2">Sort by size</option>
            <option value="3">Sort by date</option>
        </select>
    );
}
