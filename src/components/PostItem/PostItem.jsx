import { useTranslation } from "react-i18next";
import { Link} from "react-router-dom";

import Button from "../UI/Button/Button";


import "./PostItem.scss";

export default function PostItem({ id, body, title, remove, post }) {
  const { t } = useTranslation();


  return (
    <>
      <div className="post__item">
        <div className="post__content">
          <div className="post__title">{id}. {title} </div>
          <div className="post__text">
            {body}
          </div>
        </div>
        <div className="post__list-btn">
          <Link
            to={`/posts/${id}`}
            className="post__link-open"
          >
            {t("OPEN")}
          </Link>
          <Button
            type="button"
            onClick={() => remove(post)}>
            {t("DELETE")}
          </Button>
        </div>
      </div>
    </>
  );
}
