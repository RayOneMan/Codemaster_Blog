import React, { useState, useEffect } from "react";
import { usePosts } from "../../hooks/usePost";
import { getPageCount } from "../../utils/pages";
import { useFetching } from "../../hooks/useFetching";
import { useTranslation } from "react-i18next";

import PostForm from "../../components/PostForm/PostForm";
import Spinner from "../../components/Spinner";
import PostService from "../../API/PostService";
import PostsFilter from "../../components/PostFilter/PostFilter";
import Modal from "../../components/UI/Modal/Modal";
import Pagination from "../../components/UI/Pagination/Pagination";
import PostList from "../../components/PostList/PostList";

import "./Posts.scss";

// этот компонент получился излишне большим, делает много всего сразу
// Присмотрись внимательно какие компоненты можно извлечь как дочерние, чтобы уменьшить кол-во кода в этом компоненте
// Сейчас его сложно тестировать
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [limit] = useState(10);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [isVisibleAddPost, setIsVisibleAddPost] = useState(false);
  const [isVisibleSearch, setIsVisibleSearch] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const { t } = useTranslation();

  const [getPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page);
    setPosts([...response.data]);
    const totalCount = response.headers["x-total-count"]; // ого, здесь молодец, нашёл решение :) правда в нормальном апи total вернётся как отдельное поле
    setTotalPages(getPageCount(totalCount, limit));
  });

  useEffect(() => {
    getPosts(limit, page);
  }, []);

  const [onCreateNewPost] = useFetching(async (newPost) => {
    await PostService.onCreateNewPost(newPost);
    getPosts(limit, page); // это лишнее, после создания / редактирования элемента не нужны доп запросы на сервер, их можно вставить в уже существующий набор постов
    setIsVisibleAddPost(false);
  });

  // const onEditPost = (id, editPost) => {
  //   PostService.onEditPost(id, editPost);
  //   getPosts(limit, page);
  //   // setIsVisibleEdit  (false);
  // };

  const onRemovePost = (post) => {
    if (window.confirm(`${t("DELETE_POST")} №${post.id}?`)) {
      setPosts(posts.filter(p => p.id !== post.id));
      PostService.onRemovePostId(post.id);}
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
        {postError && <h2 style={{display: "flex", justifyContent: "center", marginTop: 50}}>Error: ${postError} </h2>}
        {isPostsLoading ? <Spinner /> : <PostList posts={sortedAndSearchedPosts} remove={onRemovePost}/>}
        <Pagination page={page} limit={limit}
          changePage={changePage}
          totalPages={totalPages} />
      </div>
      <div className="footer">
        <div>
          <button
            className="material-icons footer__add-btn"
            onClick={() => setIsVisibleSearch(true)}>
            search
          </button>
        </div>
        <div> <button
          className="material-icons footer__search-btn"
          onClick={() => setIsVisibleAddPost(true)}>
          add
        </button></div>
      </div>
    </div>
  );
}
