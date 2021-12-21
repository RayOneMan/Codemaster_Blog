import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import Button from "../UI/Button/Button";

import "./CommentForm.scss";

export default function PostForm({ onCreateNewComment }) {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ name: "", email:"", body: "" }}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("Обязательное поле!"),
        email: Yup.string().email("Invalid email").required("Required"),
        body: Yup.string()
          .required("Обязательное поле!"),
      })}
      onSubmit={ (newComment, { setSubmitting }) => {
        onCreateNewComment(newComment);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="create-new-comment" action="">
          <div className="create-new-comment__inputComment">
            <div className="create-new-comment__inputs">
              <Field
                type="text"
                name="name"
                className="create-new-comment__input"
                placeholder={t("COMMENT_NAME")}
              />
              <ErrorMessage
                component="div"
                className="error"
                name="name" />
            </div>
            <div className="create-new-comment__inputs">
              <Field
                type="text"
                name="email"
                className="create-new-comment__input"
                placeholder={t("COMMENT_EMAIL")}
              />
              <ErrorMessage
                component="div"
                className="error"
                name="email" />
            </div>
            <div className="create-new-comment__inputs">
              <Field
                type="text"
                name="body"
                as="textarea"
                className="create-new-comment__input"
                placeholder={t("COMMENT_BODY")}
              />
              <ErrorMessage
                component="div"
                className="error"
                name="body" />
            </div>
          </div>
          <div>
            <Button
              className="create-new-comment__btn"
              type="submit"
              disabled={isSubmitting}>
              {t("CREATE_NEW_COMMENT")}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
