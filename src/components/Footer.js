import React from 'react';

export default class Footer extends React.Component {

    render() {

        return (
            <footer className="main-footer">
                <div className="content-wrap main-footer__container">
                    <ul className="nav-block">
                        <li><a className="link-highlight">Email</a></li>
                        <li><a className="link-highlight">Github</a></li>
                        <li><a className="link-highlight">LinkedIn</a></li>
                        <li><a className="link-highlight">VK</a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}