import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    // isActive(href) {
    //     return window.location.pathname === href;
    // }

    render() {
        return (
            <>
                <Navbar></Navbar>
                <main className="main-content main-content_space-g_l">
                    {this.props.children}
                </main>
                <Footer></Footer>
            </>
        );
    }
}