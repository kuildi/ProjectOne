import React from 'react';
import Card from '../components/Card'

export default class Contacts extends React.Component {
    render() {
        let contactText = `I am a very simple card. 
                           I am good at containing small bits of information.
                           I am convenient because I require little markup to use effectively. 
                           I am similar to what is called a panel in other frameworks.`;

        return (
            <article className="grid-main">
                <h1 className="text-center grid__item_width_full">Contacts</h1>
                <div className="grid__item_width_half grid__item_distribute_center">
                    {/* <div className="card">
                        <header className="card__header">
                            <h4 className="white-text">Контакты</h4>
                        </header>
                        <section className="card__content">
                            <span className="">I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively. I am similar to what is called a panel in other frameworks.</span>
                            <ol>
                                <li>Tel: 8-800-555-35-35</li>
                                <li> Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, blanditiis doloremque amet adipisci quidem, ducimus repellendus impedit aspernatur harum odit explicabo fugit unde corrupti nemo earum omnis dolores possimus voluptatem? </li>
                                <li> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa laudantium quam veniam facilis consequatur doloremque dolorem blanditiis in, mollitia ea voluptates. Saepe qui a ducimus sit aperiam sequi, in culpa. </li>
                                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, totam nisi. Voluptatem, ipsa provident laboriosam voluptatibus ipsum in nihil et porro neque dolorum tempore eligendi quibusdam, rem expedita beatae eaque!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque numquam velit sunt ea iure tempora hic commodi nulla eligendi accusantium omnis, aliquid iste recusandae quidem doloremque, necessitatibus suscipit blanditiis adipisci?</li>
                            </ol>
                        </section>
                        <footer className="card__footer"></footer>
                    </div> */}

                    <Card header={'Контакты'} text={contactText} class={''}/>   
                </div>
            </article>
        );
    }
}