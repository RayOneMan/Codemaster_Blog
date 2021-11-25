import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import PostService from "../API/PostService";
import Spinner from "../components/Spinner";
import PostId from "../components/PostId";
import { useFetching } from "../hooks/useFetching";
import { useTranslation } from "react-i18next";

/**
 * на 404 странице есть возврат ко всем постам, а здесь его не хватает
 * Комменты в идеале надо уметь создавать/удалять, пускай даже чужие тоже
 */
const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { t } = useTranslation();

  /**
   * В идеале каждый упавший запрос должен быть выведен нотификацией
   * И каждый успешный запрос на Create/Update/Delete тоже
   *
   */
  const [getPostById, isPostsLoading] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [getComments, isCommentsLoading] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  const onRemoveCom = (com) => {
    setComments(comments.filter(c => c.id !== com.id));
    PostService.onRemoveCommentByPostId(com.id);
  };

  useEffect(() => {
    getPostById(params.id);
    getComments(params.id);
  }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="content">
          <h1>{t("POST_№")} {params.id}</h1>
          {isPostsLoading
            ? <Spinner />
            : <PostId title={post.title} body={post.body} id={post.id} />
          }
          <h2> {t("COMMENTS")} </h2>
          {isCommentsLoading
            ? <Spinner />
            : <div>
              {comments.map(com =>
                <div key={com.id} className="content__item">
                  <div className="com__name">{com.name}</div>
                  <div className="com__email">{com.email}</div>
                  <div className="com__body">{com.body}</div>
                  <button className="post__btn" onClick={() => onRemoveCom(com)}> delete </button>
                </div>
              )}
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default PostIdPage;
