import { useTranslation } from "react-i18next";
import { Link} from "react-router-dom";

import Button from "../UI/Button/Button";


import "./PostItem.scss";

export default function PostItem({ id, body, title, remove, post }) {
  const { t } = useTranslation();


  return (
    <>
<<<<<<< HEAD
=======
      <Modal
        visible={isVisibleEdit}
        setVisible={setIsVisibleEdit}>

        {/*onEditPost и подобные не надоело пробрасывать между компонентами вверх/вниз по дереву?*/}
        {/*для этого как раз и создан redux/mobx, советую второй, с ним проще*/}

        <PostEdit onEditPost={onEditPost} postBody={post.body} postTitle={post.title}/>
      </Modal>
>>>>>>> c8f3af9a0a37ca2e47747d0dfa36ea9f2b2e8182
      <div className="post__item">
        <div className="post__content">
          <div className="post__title">{id}. {title} </div>
          <div className="post__text">
            {body}
          </div>
        </div>
        <div className="post__list-btn">
<<<<<<< HEAD
          <Link
            to={`/posts/${id}`}
            className="post__link-open"
=======
          {/*это ссылка, а не кнопка, как и другие места где ты делаешь навигацию*/}
          <Button
            type="button"
            onClick={() => nav(`/posts/${id}`)}
>>>>>>> c8f3af9a0a37ca2e47747d0dfa36ea9f2b2e8182
          >
            {t("OPEN")}
          </Link>
          <Button
            type="button"
            onClick={() => remove(post)}>
            {t("DELETE")}
          </Button>
<<<<<<< HEAD
=======
          <Button
            type="button"
            onClick={() => setIsVisibleEdit(true)}>
            Изменить
          </Button>
>>>>>>> c8f3af9a0a37ca2e47747d0dfa36ea9f2b2e8182
        </div>
      </div>
    </>
  );
}
