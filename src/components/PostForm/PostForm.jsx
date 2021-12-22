import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useParams } from "react-router-dom";

import * as Yup from "yup";
import Button from "../UI/Button/Button";

import "./PostForm.scss";

export default function PostForm({ onCreateNewPost, onEditPost, post }) {
  const { t } = useTranslation();

  const { id } = useParams();
  const isAddMode = !id;

  if (isAddMode) {
    var initialValues = { title: "", body: "" };
  } else {
    initialValues = { title: post.title, body: post.body };
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={Yup.object({
        title: Yup.string()
          .min(2, "Минимум 2 символа для заполнения")
          .required("Обязательное поле!"),
        body: Yup.string()
          .min(10, "Минимум 10 символа для заполнения")
          .required("Обязательное поле!"),
      })}
      onSubmit={(post, { setStatus, setSubmitting }) => {
        setStatus();
        if (isAddMode) {
          const newPost = {
            ...post, id: Date.now()
          };
          onCreateNewPost(newPost);
          setSubmitting(false);
        } else {
          onEditPost(id, post);
          setSubmitting(false);
        }
      }}>
      {({ isSubmitting }) => {
        return (
          <Form className="create-new-post" action="">
            <h1>{isAddMode ? t("CREATE_NEW_POST") : (t("EDIT_POST") + id)}</h1>
            <div className="create-new-post__inputPost">
              <div className="create-new-post__list-inputs">
                <Field
                  type="text"
                  name="title"
                  className="create-new-post__input"
                  placeholder={t("TITLE_POST")}
                />
                <ErrorMessage
                  component="div"
                  className="error"
                  name="title" />
              </div>
              <div className="create-new-post__list-inputs">
                <Field
                  type="text"
                  name="body"
                  as="textarea"
                  rows="10"
                  className="create-new-post__input"
                  placeholder={t("POST_DESCRIPTION")}
                />
                <ErrorMessage
                  component="div"
                  className="error"
                  name="body" />
              </div>
            </div>
            <div>
              <Button
                className="create-new-post__btn"
                type="submit"
                disabled={isSubmitting}>
                {isAddMode ? t("CREATE_POST_BTN") : t("EDIT_POST_BTN")}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
