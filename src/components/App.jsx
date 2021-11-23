import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import About from "../pages/About";
import Header from "./Header";
import Posts from "../pages/Posts";
import "./App.scss";
import NotFound from "../pages/NotFound";
import PostIdPage from "../pages/PostIdPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Navigate to="/posts" />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route exact path="/posts/:id" element={<PostIdPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
