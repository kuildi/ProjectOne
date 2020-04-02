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
            <footer className="page-footer deep-orange footer_sticky">
                <div className="container">
                    <div className="row mg-bot-0">
                        <div className="col l6 s12">
                            <h5 className="white-text">Footer Content</h5>
                            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
                        </div>
                        <div className="col l6 s12">
                            <ul>
                                <li><a href="#" rel="noopener noreferrer">lorem</a></li>
                                <li><a href="#" rel="noopener noreferrer">lorem2</a></li>
                                <li><a href="#" rel="noopener noreferrer">lorem3</a></li>
                                <li><a href="#" rel="noopener noreferrer">lorem4</a></li>
                                <li><a href="#" rel="noopener noreferrer">lorem5</a></li>
                                <li><a href="#" rel="noopener noreferrer">lorem6</a></li>
                                <li><a href="#" rel="noopener noreferrer">lorem7</a></li>
                                <li><a href="#" rel="noopener noreferrer">lorem8</a></li>
                                <li><a href="#" rel="noopener noreferrer">lore9</a></li>
                                <li><a href="#" rel="noopener noreferrer">lore10</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}