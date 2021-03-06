import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Navbar />
                <main className="main-bg main-content section_min-height">
                    {this.props.children}
                </main>
                <Footer />
            </>
        );
    }
}