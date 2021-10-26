import { Component } from 'react';

import "./CreateNewPost.scss";

export default class CreateNewPost extends Component {
    render() {
        return (
            <form className="create-new-post" action="">
                <div className="create-new-post__inputPost">
                    <div className="create-new-post__list-inputs">
                        <input type="text" className="create-new-post__input" placeholder="Title post" />
                    </div>
                    <div className="create-new-post__list-inputs">
                        <input type="text" className="create-new-post__input" placeholder="Post description" />
                    </div>
                </div>
                <div>
                    <button type="submit" className="create-new-post__btn">Create new post</button>
                </div>
            </form>
        )
    }
}
