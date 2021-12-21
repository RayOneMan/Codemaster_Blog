import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useFetching } from "../../hooks/useFetching";

import PostService from "../../API/PostService";
import Spinner from "../../components/Spiner/Spinner";

import "./About.scss";

export default function About() {
  const { t } = useTranslation();
  const [about, setAbout] = useState("");

  const [getAbout, isAboutLoading, aboutError] = useFetching(async () => {
    const response = await PostService.getAbout();
    setAbout(response.data);
  });

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="about">
          <h2 className="about__title">{t("ABOUT_SITE")}</h2>
          <div className="about__item">
            {aboutError && <h2>Error: ${aboutError} </h2>}
            {isAboutLoading ? <Spinner /> : about.body}
          </div>
        </div>
      </div>
    </div>
  );
}
