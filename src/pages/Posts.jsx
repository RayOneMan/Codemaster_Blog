import React, { useState, useEffect } from "react";
import { usePosts } from "../hooks/usePost";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import PostService from "../API/PostService";

import PostsFilter from "../components/PostFilter";
import Modal from "../components/UI/Modal/Modal";
import { useError } from "../hooks/useError";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [limit] = useState(100);
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [isVisibleAddPost, setIsVisibleAddPost] = useState(false);
    const [isVisibleSearch, setIsVisibleSearch] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [getPosts, isPostsLoading, postError] = useError(async () => {
        const response = await PostService.getAll(limit);
        setPosts(response.data);
    });

    useEffect(() => {
        getPosts(limit);
    }, [limit]);

    const onCreatePost = (newPost) => {
        setPosts([newPost, ...posts]);
        posts.push(newPost);
        setIsVisibleAddPost(false);
    };

    const onRemovePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    return (
        <div className="page">
            <div className="container">
                <Modal
                    visible={isVisibleAddPost}
                    setVisible={setIsVisibleAddPost}>
                    <PostForm create={onCreatePost} />
                </Modal>
                <Modal
                    visible={isVisibleSearch}
                    setVisible={setIsVisibleSearch}>
                    <PostsFilter
                        filter={filter}
                        setFilter={setFilter} />
                </Modal>
                <button
                    className="material-icons add_btn"
                    onClick={() => setIsVisibleAddPost(true)}>
                    add
                </button>
                <button
                    className="material-icons search_btn"
                    onClick={() => setIsVisibleSearch(true)}>
                    search
                </button>
                {postError &&
                    <h1>Error: ${postError}</h1>
                }
                <PostList
                    posts={sortedAndSearchedPosts}
                    remove={onRemovePost} />
                {isPostsLoading &&
                    <Spinner />}
            </div>
        </div>
    );
}