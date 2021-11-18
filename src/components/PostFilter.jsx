// import NumberOfPostPerPage from "./NumberOfPostPerPage";
import Input from "./UI/Input/Input";
import Select from "./UI/Select/Select";
import { useTranslation } from "react-i18next";

import "./PostsFilter.scss";

export default function PostsFilter({ filter, setFilter }) {
    const { t } = useTranslation();
    return (
        <div className="search">
            <Input
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                className="search__input"
                placeholder={t("SEARCH")}
            />
            <Select
                className="search__select"
                value={filter.query}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue={t("SORT")}
                options={[
                    { value: "title", name: t("SORT_BY_TITLE") },
                    { value: "title", name: t("SORT_BY_DISCRIPTION") }
                ]}
            />
            {/* <NumberOfPostPerPage /> */}
        </div>
    );
}
