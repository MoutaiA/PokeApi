import React from 'react';
import './NotFound.css';

class NotFound extends React.Component {
    render() {
        return (
            <div className="error-404">
                <h1>Error 404 : The page can't be found !</h1>
                <div className="error-content">
                    <div>We are sorry !</div>
                    <div>If you want to comeback to the Homepage, cou can click <a href="/">here</a></div>
                </div>
                <img src="images/error.png" alt="Psyduck error 404" />
            </div>
        );
    }
}

export default NotFound;