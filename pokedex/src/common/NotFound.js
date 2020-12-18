import React from 'react';
import './NotFound.css';
import {
    Link,
} from "react-router-dom";

function NotFound() {

    return (
        <div className="error-404">
            <h1>Error 404 : The page can't be found !</h1>
            <div className="error-content">
                <div>We are sorry !</div>
                <div>If you want to comeback to the Homepage, cou can click <Link to="/">here</Link></div>
            </div>
            <img src="images/error.png" alt="Psyduck error 404" />
        </div>
    );
}

export default NotFound;