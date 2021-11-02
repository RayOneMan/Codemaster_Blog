import "./PostForm.scss";
import { useTranslation } from "react-i18next";

export default function PostForm() {
    const {t} = useTranslation();
    return (
        <form className="create-new-post" action="">
            <div className="create-new-post__inputPost">
                <div className="create-new-post__list-inputs">
                    <input type="text" className="create-new-post__input" placeholder={t("TITLE_POST")} />
                </div>
                <div className="create-new-post__list-inputs">
                    <input type="text" className="create-new-post__input" placeholder={t("POST_DESCRIPTION")} />
                </div>
            </div>
            <div>
                <button type="button" className="create-new-post__btn">{t("CREATE_NEW_POST")}</button>
            </div>
        </form>
    );
}