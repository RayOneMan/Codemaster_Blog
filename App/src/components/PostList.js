import { Component } from 'react'
import PostItem from './PostItem';

import "./PostList.scss";

export default class PostList extends Component {
    render() {
        return (
            <div className="posts">
                <div className="posts__title">Posts list</div>
                <div className="posts__list">
                    {/*погугли как делают циклы в реакте*/}
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                    <PostItem />
                </div>
            </div>
        )
    }
}
