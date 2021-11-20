import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container">
            <div className="content">
                <div className="content__title">Error 404:
                    <div className="content__item"> страница не обнаружена</div>
                </div>
                <Link to="/posts" className="comeback"> Вернуться на главную</Link>
            </div>
        </div>
    );
}
