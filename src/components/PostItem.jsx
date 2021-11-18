import "./PostItem.scss";
import { useTranslation } from "react-i18next";
import { useHistory} from "react-router";


export default function PostItem({ number, body, title, remove, post }) {
    const { t } = useTranslation();
    const router = useHistory();
    return (
        <div className="post__item">
           
            <div className="post__content">
                <div className="post__title">{number}. {title} </div>
                <div className="post__text">
                    {body}
                </div>
            </div>
            <div className="post__list-btn">
                <button
                    type="button" className="post__btn"
                    onClick ={() => router.push(`/posts/${post.number}`)}>
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
