import { Component } from 'react';
import CreateNewPost from './CreateNewPost';
import Search from './Search';

import "./Container.scss";
import PostList from './PostList';
import Paggination from './Paggination';
import Line from './Line';

export default class Conteiner extends Component {
    render() {
        return (
            <div className="container">
                <CreateNewPost />
                <Line />
                <Search />
                <PostList />
                <Paggination />
            </div>
        )
    }
}
