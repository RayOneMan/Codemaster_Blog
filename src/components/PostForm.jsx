import "./PostForm.scss";
import { useTranslation } from "react-i18next";
import React, { useState } from "react";

export default function PostForm({ create }) {
    const { t } = useTranslation();
    const [post, setPost] = useState({ title: "", body: "" });

    const createNewPost = (e) => {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        };
        create(newPost);
        setPost({ title: "", body: "" });
    };

    return (
        <form className="create-new-post" action="">
            <div className="create-new-post__inputPost">
                {/* <input type="file" name="picture" /> */}
                <div className="create-new-post__list-inputs">
                    <input
                        value={post.title}
                        onChange={e => setPost({ ...post, title: e.target.value })}
                        type="text"
                        className="create-new-post__input"
                        placeholder={t("TITLE_POST")}
                    />
                </div>
                <div className="create-new-post__list-inputs">
                    <input
                        value={post.body}
                        onChange={e => setPost({ ...post, body: e.target.value })}
                        type="text"
                        className="create-new-post__input"
                        placeholder={t("POST_DESCRIPTION")}
                    />
                </div>
            </div>
            <div>
                <button onClick={createNewPost} type="button" className="create-new-post__btn">{t("CREATE_NEW_POST")}</button>
            </div>
        </form>
    );
}