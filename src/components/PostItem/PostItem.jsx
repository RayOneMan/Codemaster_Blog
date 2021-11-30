import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../UI/Button/Button";
import Modal from "../UI/Modal/Modal";
import PostEdit from "../PostEdit/PostEdit";

import "./PostItem.scss";

export default function PostItem({ id, body, title, remove, onEditPost, post }) {
  const { t } = useTranslation();
  const nav = useNavigate();
  const [isVisibleEdit, setIsVisibleEdit] = useState(false);

  return (
    <>
      <Modal
        visible={isVisibleEdit}
        setVisible={setIsVisibleEdit}>

        {/*onEditPost и подобные не надоело пробрасывать между компонентами вверх/вниз по дереву?*/}
        {/*для этого как раз и создан redux/mobx, советую второй, с ним проще*/}

        <PostEdit onEditPost={onEditPost} postBody={post.body} postTitle={post.title}/>
      </Modal>
      <div className="post__item">
        <div className="post__content">
          <div className="post__title">{id}. {title} </div>
          <div className="post__text">
            {body}
          </div>
        </div>
        <div className="post__list-btn">
          {/*это ссылка, а не кнопка, как и другие места где ты делаешь навигацию*/}
          <Button
            type="button"
            onClick={() => nav(`/posts/${id}`)}
          >
            {t("OPEN")}
          </Button>
          <Button
            type="button"
            onClick={() => remove(post)}>
            {t("DELETE")}
          </Button>
          <Button
            type="button"
            onClick={() => setIsVisibleEdit(true)}>
            Изменить
          </Button>
        </div>
      </div>
    </>
  );
}
