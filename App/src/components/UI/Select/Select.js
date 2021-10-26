import { Component } from 'react'

export default class Select extends Component {
    render() {
        return (
            <select className="search__select">
                <option value="" selected disabled hidden>Sorting</option>
                <option value="1">Sort by title</option>
                <option value="2">Sort by size</option>
                <option value="3">Sort by date</option>
            </select>
        )
    }
}
