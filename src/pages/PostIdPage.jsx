import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import PostService from "../API/PostService";
import Spinner from "../components/Spinner";
import { useError } from "../hooks/useError";

const PostIdPage = () => {
    const params = useParams();
    console.log(params);
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
        <div>
            <h1>Вы открыли страницу поста с ID: {params.id}</h1>
            {isPostsLoading
                ? <Spinner />
                : <div>{post.id}. {post.title}</div>
            }
            <h1> коментарии </h1>
            {isCommentsLoading
                ? <Spinner />
                : <div>
                    {comments.map(com =>
                        <div key={com.id}>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );

};

export default PostIdPage;