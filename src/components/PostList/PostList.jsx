import PostItem from "../PostItem/PostItem";
import { useTranslation } from "react-i18next";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "./PostList.scss";

export default function PostList({ posts, remove }) {
  const { t } = useTranslation();

  return (
    <div className="posts">
      <div className="posts__title">{t("POST_LIST")}</div>
      <div className="posts__list">
        <TransitionGroup>
          {posts.map((post) =>
            <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
              <PostItem remove={remove} title={post.title} body={post.body} id={post.id} post={post} />
            </CSSTransition>
          )}
        </TransitionGroup>

      </div>
    </div>
  );
}
