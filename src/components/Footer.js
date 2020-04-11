import React from 'react';
import Menu from './Menu';

export default class Footer extends React.Component {

    render() {

        const menuItems = [
            { href: "/", title: "Главная" },
            { href: "/about", title: "О Вас" },
            { href: "/service", title: "Services" },
            { href: "/about", title: "О Аас" },
            { href: "/service", title: "Serv" },
        ];

        return (
            <footer className="main-footer main-footer_sticky">
                <div className="main-footer__container">
                    <h2 className="main-footer__header_indent-b_s">Footer Content</h2>
                    <p>You can use rows and columns here to organize your footer content.</p>
                </div>
            </footer>
        );
    }
}