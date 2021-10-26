import { Component } from 'react';

import Header from './Header';
import SvgHeader from './SvgHeader';
import Conteiner from './Container';

import "./App.scss";

export default class App extends Component {
    render() {
        return (
            <div className="page">
                <Header />
                <SvgHeader />

                {/*conteinter -> container*/}
                {/*этот компонент лишний, не делает ничего полезного*/}
                <Conteiner />
            </div>
        )
    }
}
