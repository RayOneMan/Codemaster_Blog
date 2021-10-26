import { Component } from 'react';

import "./Sorting.scss";

export default class Sorting extends Component {
    render() {
        return (
            <select className="search__select" defaultValue={'DEFAULT'} >

                <option value="DEFAULT" disabled>Sorting</option>
                <option value="1">Sort by title</option>
                <option value="2">Sort by size</option>
                <option value="3">Sort by date</option>
            </select>
        )
    }
}
