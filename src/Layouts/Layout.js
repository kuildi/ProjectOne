import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Header />
                <main className="main-bg main-content section_min-height">
                    {this.props.children}
                </main>
                <Footer />
            </>
        );
    }
}