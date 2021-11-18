import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Header from "./Header";
import Posts from "../pages/Posts";
import "./App.scss";
import NotFound from "../pages/NotFound";



const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/posts" element={<Posts />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    );
};

export default App;