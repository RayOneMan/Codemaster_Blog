import { useTranslation } from "react-i18next";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Spinner from "../Spiner/Spinner";
import PostService from "../../API/PostService";
import PostItem from "../PostItem/PostItem";

import "./PostList.scss";

export default function PostList({ posts, setPosts, isPostsLoading }) {
  const { t } = useTranslation();

  const onRemovePost = (post) => {
    if (window.confirm(`${t("DELETE_POST")} Id: ${post.id}?`)) {
      setPosts(posts.filter(p => p.id !== post.id));
      PostService.onRemovePostId(post.id);
    }
  };

  if (!posts.length) {
    return (
      <h1 style={{ textAlign: "center" }}>
        {t("POSTS_NOT_FOUND")}
      </h1>
    );
  }

  return (
    <div className="posts">
      <div className="posts__title">{t("POST_LIST")}</div>
      <div className="posts__list">
        <TransitionGroup className="post">
          {posts.map((post, index) =>
            <CSSTransition
              key={post.id}
              timeout={1000}
              classNames="post"
            >
              <PostItem
                number={index + 1}
                remove={onRemovePost}
                post={post}
              />
            </CSSTransition>
          )}
        </TransitionGroup>
        {isPostsLoading && <div><Spinner /></div>}
      </div>
    </div>
  );
}
