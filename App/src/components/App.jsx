import Header from "./Header";
import PostForm from "./PostForm";
import Search from "./Search";
import PostList from "./PostList";
import Pagination from "./Pagination";

import "./App.scss";

const data = [
    { id: 1, title: "Title 1", content_text: "Discription 1" },
    { id: 2, title: "Title 2", content_text: "Discription 2" },
    { id: 3, title: "Title 3", content_text: "Discription 3" },
    { id: 4, title: "Title 4", content_text: "Discription 4" },
    { id: 5, title: "Title 5", content_text: "Discription 5" },
    { id: 6, title: "Title 6", content_text: "Discription 6" },
    { id: 7, title: "Title 7", content_text: "Discription 7" },
    { id: 8, title: "Title 8", content_text: "Discription 8" },
    { id: 9, title: "Title 9", content_text: "Discription 9" },
    { id: 10, title: "Title 10", content_text: "Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10Discription 10 " }

];


export default function App() {
    return (
        <div className="page">
            <Header />
            <div className="container">
                <PostForm />
                <div className="line"></div>
                <Search />
                <PostList info={data} />
                <Pagination />
            </div>
        </div>
    );
}