import { Component } from 'react'

import "./PostItem.scss";

export default class PostItem extends Component {
    render() {
        return (
            <div className="posts__item">
                <div className="posts__content">
                    <div className="post__title">1. Lorem </div>
                    <div className="post__text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officia laboriosam
                        architecto aspernatur eos perspiciatis eius expedita mollitia dolorum hic rem corrupti
                        ducimus rerum, ipsa, consequatur minus. Iure, delectus eos!
                    </div>
                </div>
                <div className="post__list-btn">
                    {/*где type у кнопок? говорил об этом ранее*/}
                    <button className="post__btn">open</button>
                    <button className="post__btn">delete</button>
                </div>
            </div>
        )
    }
}
