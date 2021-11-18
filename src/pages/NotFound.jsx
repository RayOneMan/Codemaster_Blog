import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="container">
            <div className="notFound content">
                <div className="notFound title">Error 404:
                    <div> страница не обнаружена</div>
                </div>
                <Link to="/posts" className="comeback"> Вернуться на главную</Link>
            </div>
        </div>
    );
}
