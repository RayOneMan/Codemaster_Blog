import { useTranslation } from "react-i18next";

export default function Comments({ comments, onRemoveCom }) {
  const { t } = useTranslation();

  return (
    <div className="comments">
      {comments.map(Comment =>
        <div key={Comment.id} className="post-id-page__comments">
          <div className="comments__name">{t("COMMENT_NAME")} {Comment.name}</div>
          <div className="comments__email">{t("COMMENT_EMAIL")} {Comment.email}</div>
          <div className="comments__body">{Comment.body}</div>
          <button
            className="delet__btn material-icons"
            onClick={() => onRemoveCom(Comment)}>
            clear
          </button>
        </div>
      )}
    </div>
  );
}
