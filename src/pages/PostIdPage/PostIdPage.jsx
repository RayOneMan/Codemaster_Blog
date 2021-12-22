import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useFetching } from "../../hooks/useFetching";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import PostService from "../../API/PostService";
import Spinner from "../../components/Spiner/Spinner";
import PostId from "../../components/PostId/PostId";
import CommentForm from "../../components/CommentForm/CommentForm";
import Comments from "../../components/Comments/Comments";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/UI/Modal/Modal";
import PostForm from "../../components/PostForm/PostForm";

import "./PostIdPage.scss";


const PostIdPage = () => {
  const { t } = useTranslation();

  const params = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const [isVisibleEditPost, setIsVisibleEditPost] = useState(false);

  const [getPostById, isPostLoading, postError] = useFetching(async (id) => {
    const response = await PostService.getPostById(id);
    setPost(response.data);
  });

  const [getComments, isCommentsLoading, commentsError] = useFetching(async (id) => {
    const response = await PostService.getCommentsByPostId(id);
    setComments(response.data);
  });

  const [onCreateNewComment] = useFetching(async (newComment) => {
    const postId = Number(params.id);
    await PostService.onCreateNewComment(newComment, postId);
    getComments(params.id);
  });

  const onRemoveCom = (Comment) => {
    if (window.confirm(`${t("DELETE_COMMENT")} Id: ${Comment.id}?`)) {
      setComments(comments.filter(c => c.id !== Comment.id));
      PostService.onRemoveCommentByPostId(Comment.id);
    }
  };

  const [onEditPost] = useFetching(async (id, post) => {
    await PostService.onEditPost(id, post);
    getPostById(id);
    setIsVisibleEditPost(false);
  });

  useEffect(() => {
    getPostById(params.id);
    getComments(params.id);
  }, []);

  return (
    <div className="page">
      <div className="container">
        <div className="post-id-page">
          <Link
            to="/posts"
            className="material-icons comeback__btn">
            arrow_back <div className="comeback-btn-text"> {t("COMEBACK")} </div>
          </Link>
          <div className="post-id-page__title">{t("POST_ID")} {params.id}</div>
          {postError && <h2>Error: ${postError} </h2>}
          {isPostLoading
            ? <Spinner />
            : <PostId title={post.title} body={post.body} id={post.id} />
          }
          <Modal
            visible={isVisibleEditPost}
            setVisible={setIsVisibleEditPost}>
            <PostForm onEditPost={onEditPost} post={post} />
          </Modal>
          <Button
            type="button"
            onClick={() => setIsVisibleEditPost(true)}
          >
            {t("EDIT_POST_BTN")}
          </Button>

          <h2> {t("COMMENTS")} </h2>
          {commentsError && <h2>Error: ${commentsError} </h2>}
          {isCommentsLoading
            ? <Spinner />
            : <Comments
              comments={comments}
              onRemoveCom={onRemoveCom} />
          }
          <CommentForm onCreateNewComment={onCreateNewComment} />
        </div>
      </div>
    </div>
  );
};

export default PostIdPage;
