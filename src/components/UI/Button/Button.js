import { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <div className="post__list-btn">
                <button className="post__btn">open</button>
                <button className="post__btn">delete</button>
            </div>
        )
    }
}
