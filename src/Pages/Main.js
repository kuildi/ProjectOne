import React from 'react';
import Button from '../components/Button';

export default class Main extends React.Component {

    render() {

        return (
            <article className="content-wrap section_space-top_xxl">
                <h1><span className="gradient-color">Hello,</span> I’m Kuznetsov Ilya - </h1>
                <p className="main-text">I’m a HTML developer based in Volgograd, Russia, currently working on frontend of Cloud-Control app at Danfoss Russia </p>
                <Button>Look at my skills</Button>
            </article>
        );
    }
}