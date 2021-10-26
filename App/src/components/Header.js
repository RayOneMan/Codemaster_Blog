import { Component } from 'react';

import "./Header.scss";

// этот стиль с классами для реакта уже устарел, надо будет писать на хуках
// https://reactjs.org/docs/hooks-intro.html
export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <a href="/#" className="header__logo">
                    <div className="logo">
                        <span>logo</span>
                    </div>
                </a>
                <ul className="header__list">
                    <li className="header__item">
                        <a href="/#" className="header__link">list posts</a>
                    </li>
                    <li className="header__item">
                        <a href="/#" className="header__link">about</a>
                    </li>
                    <li className="header__item">
                        <a href="/#" className="header__link">exit</a>
                    </li>
                </ul>
                <span className="header__menu material-icons">menu</span>
            </header>
        )
    }
}
