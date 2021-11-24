import "./NumberOfPostPerPage.scss";
import { useTranslation } from "react-i18next";
import Select from "./UI/Select/Select";

/**
 * В принципе я одобряю новые фичи, но лучше двигаться больше в сторону чего-то нового,
 * например познакомиться с redux, с formik, может использовать какой-нибудь UI-kit и т.д.
 * А то профита мало в обучении, если не пробовать изучать что-то действительно новое
 */
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
