import React from 'react'
import Menu from './Menu'

export default class Navbar extends React.Component {
    render() {
        const menuItems = [
            { id: "main", href: "/", title: "Главная" },
            { id: "football", href: "/football", title: "Футбол" },
            // { id: "basketball", href: "/basketball", title: "Баскетбол" },
            // { id: "tenis", href: "/tennis", title: "Теннис" },
            // { id: "vacancy", href: "/cricket", title: "Крикет" },
            { id: "contacts", href: "/contacts", title: "Контакты" },
            { id: "gallery", href: "/gallery", title: "Галлерея" }
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