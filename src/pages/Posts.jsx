import React, { useState, useEffect } from "react";
import { usePosts } from "../hooks/usePost";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import PostService from "../API/PostService";


import PostsFilter from "../components/PostFilter";
import Modal from "../components/UI/Modal/Modal";
import { useError } from "../hooks/useError";
import { getPageCount } from "../utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [limit] = useState(10);
    const [page, setPage] = useState(1);
    const [filter, setFilter] = useState({ sort: "", query: "" });
    const [isVisibleAddPost, setIsVisibleAddPost] = useState(false);
    const [isVisibleSearch, setIsVisibleSearch] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [getPosts, isPostsLoading, postError] = useError(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers["x-total-count"];
        setTotalPages(getPageCount[totalCount, limit]);
    });

    useEffect(() => {
        getPosts(limit, page);
    }, [page, limit]);

    const onCreatePost = (newPost) => {
        setPosts([...posts, newPost]);
        setIsVisibleAddPost(false);
    };

    const onRemovePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
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
                <Pagination
                    page={page}
                    changePage={changePage}
                    totalPages={totalPages} />
            </div>
        </div>
    );
}