import React from 'react';

export default class Contacts extends React.Component {

    render() {

        return (
            <article className="row center">
                <h1>Contacts</h1>
                <div className="col s12 m6 offset-m3">
                    <div className="card-panel blue lighten-1 white-text left-align">
                        <h4 className="white-text">Контакты</h4>
                        <span className="white-text">I am a very simple card. I am good at containing small bits of information.
                        I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                        <ol>
                            <li>Tel: 8-800-555-35-35</li>
                            <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, blanditiis doloremque amet adipisci quidem, ducimus repellendus impedit aspernatur harum odit explicabo fugit unde corrupti nemo earum omnis dolores possimus voluptatem? </li>
                            <li> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa laudantium quam veniam facilis consequatur doloremque dolorem blanditiis in, mollitia ea voluptates. Saepe qui a ducimus sit aperiam sequi, in culpa. </li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam nisi. Voluptatem, ipsa provident laboriosam voluptatibus ipsum in nihil et porro neque dolorum tempore eligendi quibusdam, rem expedita beatae eaque!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam velit sunt ea iure tempora hic commodi nulla eligendi accusantium omnis, aliquid iste recusandae quidem doloremque, necessitatibus suscipit blanditiis adipisci?</li>
                        </ol>
                    </div>
                </div>
            </article>
        );
    }
}