import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/Button';

export default class Main extends React.Component {

    render() {

        return (
            <article className="content-wrap section_space-top_xxl">
                <h1><span className="gradient-color">Hello,</span> I’m Kuznetsov Ilya - </h1>
                <p className="primary-text primary-text_indent-b_l">I’m a HTML developer based in Volgograd, Russia, currently working on frontend of Cloud-Control app at Danfoss Russia </p>
                <Button>
                    <Link to={`/skills`}>Look at my skills</Link>
                </Button>
            </article>
        );
    }
}