import React, { useState, useEffect } from "react";
import { usePosts } from "../hooks/usePost";
import { getPageCount } from "../utils/pages";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import Spinner from "../components/Spinner";
import PostService from "../API/PostService";

import PostsFilter from "../components/PostFilter";
import Modal from "../components/UI/Modal/Modal";
import { useFetching } from "../hooks/useFetching";
import Pagination from "../components/UI/Pagination/Pagination";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isVisibleAddPost, setIsVisibleAddPost] = useState(false);
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [getPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    getPosts(limit, page);
  }, []);

  const [onCreateNewPost] = useFetching(async (newPost) => {
    await PostService.onCreateNewPost(newPost);
    getPosts(limit, page);
    setIsVisibleAddPost(false);
  });

  const onRemovePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id));
    PostService.onRemovePostId(post.id);
  };

  const changePage = (page) => {
    setPage(page);
    getPosts(limit, page);
  };

  return (
    <div className="page">
      <div className="container">

        <Modal
          visible={isVisibleAddPost}
          setVisible={setIsVisibleAddPost}>
          <PostForm onCreateNewPost={onCreateNewPost} />
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
        {postError && <h1>Error: ${postError} </h1>}
        {isPostsLoading ? <Spinner /> : <PostList posts={sortedAndSearchedPosts} remove={onRemovePost} />}
        <Pagination page={page}
          changePage={changePage}
          totalPages={totalPages} />
      </div>
    </div>
  );
}
