import React from "react";
import { useTranslation } from "react-i18next";


export default function About() {
  const { t } = useTranslation();
  return (

    <div className="page">
      <div className="container">
        <div className="content">
          <h2 className="content__title">{t("ABOUT_SITE")}</h2>
          <div className="content__item"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nemo unde assumenda optio accusamus! Et, neque quas. Repellat veniam perspiciatis aliquid cupiditate nam rerum at accusantium. Laboriosam minus facilis animi!</div>
        </div>
      </div>
    </div>
  );
}
