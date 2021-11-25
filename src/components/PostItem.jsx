import "./PostItem.scss";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";


export default function PostItem({ id, body, title, remove, post }) {
  const { t } = useTranslation();
  const nav = useNavigate();
  return (
    <div className="post__item">

      <div className="post__content">
        <div className="post__title">{id}. {title} </div>
        <div className="post__text">
          {body}
        </div>
      </div>
      <div className="post__list-btn">
        <button
          type="button" className="post__btn"
          onClick={() => nav(`/posts/${id}`)}
        >
          {t("OPEN")}
        </button>
        <button
          type="button" className="post__btn" onClick={() => remove(post)}>
          {t("DELETE")}
        </button>
      </div>
    </div>
  );
}
