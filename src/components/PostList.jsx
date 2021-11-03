import PostItem from "./PostItem";
import { useTranslation } from "react-i18next";

import "./PostList.scss";

export default function PostList({ posts }) {
    const renderPostItem = posts.map(item => {
        return (<PostItem key={item.id} title={item.title} id={item.id} body={item.body} />);
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
