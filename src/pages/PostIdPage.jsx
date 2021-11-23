import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import PostService from "../API/PostService";
import Spinner from "../components/Spinner";
import PostId from "../components/PostId";
import { useError } from "../hooks/useError";
import { useTranslation } from "react-i18next";

/**
 * В мобильном виде не вижу заголовка поста, шапка перекрывает
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
   * Назвать хук useError плохая идея, он служит для апи запроса всё же, а не для ошибки
   */
  const [getPostById, isPostsLoading] = useError(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [getComments, isCommentsLoading] = useError(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  useEffect(() => {
    getPostById(params.id);
    getComments(params.id);
  }, []);

  return (
    <div className="container">
      <div className="content">
        <h1>{t("POST_№")} {params.id}</h1>
        {isPostsLoading
          ? <Spinner />
          : <PostId title={post.title} body={post.body} id={post.id} />
        }
        {/*отчего же комменты не сделаны отдельным компонентом?*/}
        <h2> {t("COMMENTS")} </h2>
        {isCommentsLoading
          ? <Spinner />
          : <div>
            {comments.map(com =>
              <div key={com.id} className="content__item">
                <div className="com__name">{com.name}</div>
                <div className="com__email">{com.email}</div>
                <div className="com__body">{com.body}</div>
              </div>
            )}
          </div>
        }
      </div>
    </div>
  );

};

export default PostIdPage;
