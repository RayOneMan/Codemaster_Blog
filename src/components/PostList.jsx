import PostItem from "./PostItem";
import { useTranslation } from "react-i18next";

import "./PostList.scss";
import { TransitionGroup, CSSTransition } from "react-transition-group";

export default function PostList({ posts, remove }) {
    const { t } = useTranslation();

    if (!posts.length) {
        return (
            <h1 style={{textAlign: "center"}}>
                Посты не найдены!
            </h1>
        );
    }
    return (
        <div className="posts">
            <div className="posts__title">{t("POST_LIST")}</div>
            <div className="posts__list">
                <TransitionGroup>
                    {posts.map((post, index) =>
                        <CSSTransition
                            key={post.id}
                            timeout={500}
                            classNames="post"
                        >
                            <PostItem remove={remove} title={post.title}  body={post.body} id={index + 1} post={post} />
                        </CSSTransition>
                    )}
                </TransitionGroup>
            </div>
        </div>
    );
}