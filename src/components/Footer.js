import React from 'react'

export default class Footer extends React.Component {

    render() {

        return (
            <footer className="main-footer">
                <div className="content-wrap main-footer__container">
                    <ul className="nav-block">
                        <li><a className="link-highlight" href="mailto:kuildi@yandex.ru">Email</a></li>
                        <li><a className="link-highlight" href='https://github.com/kuildi'>Github</a></li>
                        <li><a className="link-highlight">LinkedIn</a></li>
                        <li><a className="link-highlight" href="https://vk.com/id34475555">VK</a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}