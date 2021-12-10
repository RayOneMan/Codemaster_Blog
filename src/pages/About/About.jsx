import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import PostService from "../../API/PostService";
import Spinner from "../../components/Spinner";
import { useFetching } from "../../hooks/useFetching";

import "./About.scss";

export default function About() {
  const { t } = useTranslation();
  const [About, setAbout] = useState("");

  const [getAbout, isAboutLoading, aboutError] = useFetching(async () => {
    const response = await PostService.getAbout();
    setAbout(...response.data);
  });

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="about">
          <h2 className="about__title">{t("ABOUT_SITE")}</h2>
<<<<<<< HEAD
          <div className="about__item">
            {aboutError && <h2>Error: ${aboutError} </h2>}
            {isAboutLoading ? <Spinner /> : About.body}
          </div>
=======

          {/*эту инфу тоже можно вынести в json-server api запрос*/}
          <div className="about__item"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo unde assumenda optio accusamus! Et, neque quas. Repellat veniam perspiciatis aliquid cupiditate nam rerum at accusantium. Laboriosam minus facilis animi!</div>
>>>>>>> c8f3af9a0a37ca2e47747d0dfa36ea9f2b2e8182
        </div>
      </div>
    </div>
  );
}
