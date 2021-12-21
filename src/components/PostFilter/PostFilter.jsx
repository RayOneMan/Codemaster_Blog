import { useTranslation } from "react-i18next";

import Input from "../UI/Input/Input";
import Select from "../UI/Select/Select";

import "./PostsFilter.scss";

export default function PostsFilter({ filter, setFilter, limit, setLimit }) {
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
          { value: "body", name: t("SORT_BY_DISCRIPTION") }
        ]}
      />
      <Select
        value={limit}
        onChange={value => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Показать все" },
        ]}
      />
    </div>
  );
}
