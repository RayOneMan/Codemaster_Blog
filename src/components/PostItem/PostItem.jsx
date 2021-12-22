import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import Button from "../UI/Button/Button";

import "./PostItem.scss";

export default function PostItem({ remove, post, number }) {
  const { t } = useTranslation();

  return (
    <>
      <div className="post__item">
        <div className="post__title">{number}. {post.title} </div>
        <div className="post__content">
          <div className="post__text">
            {post.body}
          </div>
        </div>
        <div className="post__list-btn">
          <Link
            to={`/posts/${post.id}`}
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
