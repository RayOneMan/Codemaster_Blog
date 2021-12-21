import { useState, useEffect, useRef } from "react";
import { usePosts } from "../../hooks/usePost";
import { getPageCount } from "../../utils/pages";
import { useFetching } from "../../hooks/useFetching";
import { useObserver } from "../../hooks/useObserver";

import PostForm from "../../components/PostForm/PostForm";
import PostService from "../../API/PostService";
import PostsFilter from "../../components/PostFilter/PostFilter";
import Modal from "../../components/UI/Modal/Modal";
import PostList from "../../components/PostList/PostList";
import Footer from "../../components/UI/Footer/Footer";
import ScroolToTop from "../../components/UI/ScroolToTop/ScroolToTop";

import "./Posts.scss";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [totalPages, setTotalPages] = useState(0);
  const [isVisibleAddPost, setIsVisibleAddPost] = useState(false);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const [getPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers["x-total-count"];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const [onCreateNewPost] = useFetching(async (newPost) => {
    await PostService.onCreateNewPost(newPost);
    setPosts([newPost, ...posts]);
    setIsVisibleAddPost(false);
  });

  const lastElem = useRef();
  useObserver(lastElem, page < totalPages, isPostsLoading, () => {
    setPage(page + 1);
  });

  useEffect(() => {
    getPosts(limit, page);
  }, [page, limit]);

  return (
    <div className="page">
      <div className="container">
        <Modal
          visible={isVisibleAddPost}
          setVisible={setIsVisibleAddPost}>
          <PostForm onCreateNewPost={onCreateNewPost} />
        </Modal>
        <PostsFilter
          filter={filter}
          setFilter={setFilter}
          limit={limit}
          setLimit={setLimit} />
        <button
          className="material-icons add_btn"
          onClick={() => setIsVisibleAddPost(true)}>
          add
        </button>
        {
          postError
          && <h2 style={{ display: "flex", justifyContent: "center", marginTop: 50 }}>
            Error: ${postError}
          </h2>
        }
        <PostList posts={sortedAndSearchedPosts} setPosts={setPosts} isPostsLoading={isPostsLoading} />
        <div ref={lastElem} style={{ height: 20 }} />
      </div>
      <ScroolToTop />
      <Footer setIsVisibleAddPost={setIsVisibleAddPost} />
    </div>
  );
}
