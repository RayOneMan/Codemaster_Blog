import "./NumberOfPostPerPage.scss";
import { useTranslation } from "react-i18next";
import Select from "./UI/Select/Select";

export default function NumberOfPostPerPage() {
  const { t } = useTranslation();

  return (
    <Select defaultValue={t("NUMBER_OF_POSTS_PER_PAGE")}
      options={[
        { value: "1", name: "5" },
        { value: "1", name: "10" },
        { value: "1", name: "25" }
      ]}
    />
  );
}
