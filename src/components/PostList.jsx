import PostItem from "./PostItem";
import { useTranslation } from "react-i18next";

import "./PostList.scss";

export default function PostList({ info }) {


    const renderPostItem = info.map(item => {
        return (<PostItem key={item.id} title_name={item.title} id={item.id} content_text={item.content_text} />);
    });

    const {t} = useTranslation();

    return (
        <div className="posts">
            <div className="posts__title">{t("POST_LIST")}</div>
            <div className="posts__list">
                {renderPostItem}
            </div>
        </div>
    );
}
