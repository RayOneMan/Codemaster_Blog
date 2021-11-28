import "../PostForm/PostForm.scss";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Button from "../UI/Button/Button";


export default function PostEdit({ onEditPost, postBody, postTitle }) {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ title: "", body: "" }}
      validationSchema={Yup.object({
        title: Yup.string()
          .min(2, "Минимум 2 символа для заполнения")
          .required("Обязательное поле!"),
        body: Yup.string()
          .min(10, "Минимум 10 символа для заполнения")
          .required("Обязательное поле!"),
      })}
      onSubmit={(newPost, { setSubmitting }) => {
        onEditPost(newPost);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="create-new-post" action="">
          <div className="create-new-post__inputPost">
            <div className="create-new-post__list-inputs">
              <Field
                value={postTitle}
                type="text"
                name="title"
                className="create-new-post__input"
                placeholder={t("TITLE_POST")}
              />
              <ErrorMessage component="div" className="error" name="title" />
            </div>
            <div className="create-new-post__list-inputs">
              <Field
                value={postBody}
                type="text"
                name="body"
                as="textarea"
                rows="10"
                className="create-new-post__input"
                placeholder={t("POST_DESCRIPTION")}
                onChange
              />
              <ErrorMessage component="div" className="error" name="body" />
            </div>
          </div>
          <div>
            <Button className="create-new-post__btn" type="submit" disabled={isSubmitting}>
              {t("CREATE_NEW_POST")}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
