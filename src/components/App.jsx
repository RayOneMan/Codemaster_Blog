import React, {useState} from "react";
import Header from "./Header";
import PostForm from "./PostForm";
import Search from "./Search";
import PostList from "./PostList";
import Pagination from "./Pagination";

import "./App.scss";

export default function App() {
    const [posts, setPosts] = useState ([
        { id: 1, title: "Title 1", body: "Discription 1" },
        { id: 2, title: "Title 2", body: "Discription 2" },
        { id: 3, title: "Title 9", body: "Discription 9" },
        { id: 4, title: "Title 10", body: "Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10 " }
    ]);
    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    return (
        <div className="page">
            <Header />
            <div className="container">
                <PostForm create={createPost}/>
                <div className="line"></div>
                <Search />
                <PostList posts={posts} />
                <Pagination />
            </div>
        </div>
    );
}