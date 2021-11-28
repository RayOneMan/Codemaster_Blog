import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useFetching } from "../../hooks/useFetching";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PostService from "../../API/PostService";
import Spinner from "../../components/Spinner";
import PostId from "../../components/PostId/PostId";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comments from "../../components/Comments/Comments";

import "./PostIdPage.scss";



const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { t } = useTranslation();

  const [getPostById, isPostsLoading] = useFetching(async (id) => {
    const response = await PostService.getById(id);
    setPost(response.data);
  });

  const [getComments, isCommentsLoading] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  const [onCreateNewComment] = useFetching(async (newComment) => {
    const postId = Number(params.id);
    await PostService.onCreateNewComment(newComment, postId);
    getComments(params.id);
  });

  const onRemoveCom = (Comment) => {
    setComments(comments.filter(c => c.id !== Comment.id));
    PostService.onRemoveCommentByPostId(Comment.id);
  };

  useEffect(() => {
    getPostById(params.id);
    getComments(params.id);
  }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="post-id-page">
          <div className="post-id-page__title">{t("POST_№")} {params.id}</div>
          {isPostsLoading
            ? <Spinner />
            : <PostId title={post.title} body={post.body} id={post.id} />
          }
          <Link to="/posts" className="comeback__btn"> {t("COMEBACK_TO_MAIN_PAGE")}</Link>
          <h2> {t("COMMENTS")} </h2>
          {isCommentsLoading
            ? <Spinner />
            : <Comments comments={comments} onRemoveCom={onRemoveCom}/>
          }
          <CommentForm onCreateNewComment={onCreateNewComment}></CommentForm>
        </div>
      </div>
    </div>
  );
};

export default PostIdPage;
