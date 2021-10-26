import { Component } from 'react';

import "./NumberOfPostPerPage.scss";

export default class NumberOfPostPerPage extends Component {
    render() {
        return (
            <select className="search__select" defaultValue={'DEFAULT'}>
                <option value="DEFAULT" disabled>Number of posts per page</option>
                <option value="1">5</option>
                <option value="2">10</option>
                <option value="3">25</option>
            </select>
        )
    }
}
