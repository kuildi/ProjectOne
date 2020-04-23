import React from 'react'
import Menu from './Menu'

export default class Navbar extends React.Component {
    render() {
        const menuItems = [
            { id: "main", href: "/", title: "Главная" },
            { id: "football", href: "/football", title: "Футбол" },
            { id: "gallery", href: "/gallery", title: "Галлерея" },
            { id: "users", href: "/users", title: "Пользователи" },
            { id: "posts", href: "/posts", title: "Посты" },
            { id: "contacts", href: "/contacts", title: "Контакты" },
        ];
        return (
            <header className="main-header header_sticky">
                <nav className="nav-block nav-block_space-between">
                    <Menu items={menuItems}></Menu>
                </nav>
            </header>
        );
    }
}