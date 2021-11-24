import "./PostForm.scss";
import { useTranslation } from "react-i18next";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import PostService from "../API/PostService";

export default function PostForm() {
  const { t } = useTranslation();

  return (
    <Formik
      initialValues={{ title: "", body: "" }}
      validationSchema={Yup.object({
        title: Yup.string()
          .min(2, "Минимум 2 символа для заполнения")
          .required("Обязательное поле!"),
        body: Yup.string()
          .min(2, "Минимум 10 символа для заполнения")
          .required("Обязательное поле!"),
      })}
      onSubmit={(values, { setSubmitting }) => {
        PostService.onCreateNewPost(values.title, values.body);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting }) => (
        <Form className="create-new-post" action="">
          <div className="create-new-post__inputPost">
            <div className="create-new-post__list-inputs">
              <Field
                type="text"
                name="title"
                className="create-new-post__input"
                placeholder={t("TITLE_POST")}
              />
              <ErrorMessage component="div" className="error" name="title" />
            </div>
            <div className="create-new-post__list-inputs">
              <Field
                type="text"
                name="body"
                as="textarea"
                className="create-new-post__input"
                placeholder={t("POST_DESCRIPTION")}
              />
              <ErrorMessage component="div" className="error" name="body" />
            </div>
          </div>
          <div>
            <button className="create-new-post__btn" type="submit" disabled={isSubmitting}>
              {t("CREATE_NEW_POST")}
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
