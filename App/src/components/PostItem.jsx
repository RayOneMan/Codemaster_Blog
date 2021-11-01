import "./PostItem.scss";
import { useTranslation } from "react-i18next";


export default function PostItem({ id, title_name, content_text }) {
    const { t } = useTranslation();
    return (
        <div className="post__item">
            <div className="posts__content">
                <div className="post__title">{id}. {title_name} </div>
                <div className="post__text">
                    {content_text}
                </div>
            </div>
            <div className="post__list-btn">
                <button type="button" className="post__btn">{t("OPEN")}</button>
                <button type="button" className="post__btn">{t("DELETE")}</button>
            </div>
        </div>
    );
}
