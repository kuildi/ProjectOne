import React from 'react'
import Menu from './Menu'

const Header = () => {
    const menuItems = [
        { id: "main", href: "/", title: "Главная" },
        { id: "skills", href: "/skills", title: "Умения" },
        { id: "about", href: "/about", title: "Обо мне" }
    ];
    
    return (
        <header className="main-header header_sticky">
            <nav className="nav-block content-wrap">
                <Menu items={menuItems}></Menu>
            </nav>
        </header>
    );
}

export default Header