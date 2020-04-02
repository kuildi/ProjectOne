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
                <main className="row main-content">
                    {this.props.children}
                </main>
                <Footer></Footer>
            </>
        );
    }
}