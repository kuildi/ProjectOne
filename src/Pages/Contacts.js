import React from 'react';
import Card from '../components/Card'

export default class Contacts extends React.Component {
    render() {
        let contactText = `I am a very simple card. 
                           I am good at containing small bits of information.
                           I am convenient because I require little markup to use effectively. 
                           I am similar to what is called a panel in other frameworks.
                           Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam reiciendis doloremque eum quam, laborum cupiditate suscipit nulla perspiciatis! Saepe iste accusantium natus hic sapien
                           te debitis aut asperiores voluptas perspiciatis nostrum!`;

        return (
            <article className="grid-main">
                <h1 className="text-center grid__item_width_full">Contacts</h1>
                <div className="grid__item_width_half grid__item_distribute_center">
                    <Card header={'Контакты'} text={contactText} class={''}/>   
                </div>
            </article>
        );
    }
}