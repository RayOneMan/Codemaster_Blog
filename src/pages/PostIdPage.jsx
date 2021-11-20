import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import PostService from "../API/PostService";
import Spinner from "../components/Spinner";
import PostId from "../components/PostId";
import { useError } from "../hooks/useError";

const PostIdPage = () => {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

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
                <h1>Пост №: {params.id}</h1>
                {isPostsLoading
                    ? <Spinner />
                    : <PostId title={post.title}  body={post.body} id={post.id}/>
                }
                <h2> Коментарии: </h2>
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