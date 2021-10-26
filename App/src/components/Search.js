import { Component } from 'react';
import NumberOfPostPerPage from './NumberOfPostPerPage';
import Sorting from './Sorting';

import "./Search.scss";
// много лишних пустых строк, это недопустимо


export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <input type="text" className="search__input" placeholder="Search" />
                <Sorting />
                <NumberOfPostPerPage />
            </div>
        )
    }
}
