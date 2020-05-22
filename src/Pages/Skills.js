import React from 'react';
import Posts from '../components/Posts';
import Game from '../components/tic-tac-toe';
import SkillTile from '../components/SkillTile';

export default class Skills extends React.Component {

    render() {
        const articleItems = [
            { header: "Поле 1", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta ut corrupti laborum. Similique quia hic eveniet neque voluptatibus, adipisci ipsum? Deserunt ea facilis non itaque tempore rem sit accusantium quam." },
            { header: "Поляна дяди Толи", text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente veritatis officiis sunt. Iure, aut dolore delectus doloribus reiciendis inventore ab, quam magni enim dolorum dolorem possimus cumque officiis ut similique." },
            { header: "Полюшко", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit, tempora similique. Nobis praesentium eos dicta sint obcaecati ab libero maxime at minima odit, excepturi doloremque ipsum consequuntur, fugiat assumenda esse?" },
            { header: "Поле 4", text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum vero magnam voluptas labore doloribus quibusdam aspernatur tenetur. Fugit, perspiciatis eum nihil deleniti maxime odio quis, consequuntur unde, commodi maiores recusandae." },
            { header: "Поле 5", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquid quae, pariatur beatae unde provident perferendis deleniti, iusto incidunt laboriosam ipsa odit velit, earum saepe quam voluptates voluptatum non itaque." },
            { header: "Поле поле", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit minus, deleniti dignissimos tenetur omnis obcaecati soluta repellendus ipsam excepturi sed corrupti, eligendi quam. Aspernatur, veniam et nihil fuga reiciendis enim?" },
            { header: "Еще одно поле", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam repudiandae assumenda obcaecati sunt aspernatur consectetur esse sit accusantium qui, labore reiciendis voluptatibus asperiores praesentium quis quos ipsa alias velit eveniet." },
        ];

        return (
            <article className="content-wrap section_space-v_l">
                <h1 className="gradient-color">Skills</h1>
                <section className="grid-container">
                    <SkillTile>HTML5</SkillTile>
                    <SkillTile>CSS3</SkillTile>
                    <SkillTile>JavaScript</SkillTile>
                    <SkillTile>React</SkillTile>
                    <SkillTile>Redux</SkillTile>
                    <SkillTile>HTML5</SkillTile>
                    <SkillTile>CSS3</SkillTile>
                    <SkillTile>JavaScript</SkillTile>
                    <SkillTile>React</SkillTile>
                    <SkillTile>Redux</SkillTile>
                    <SkillTile>HTML5</SkillTile>
                    <SkillTile>CSS3</SkillTile>
                    <SkillTile>JavaScript</SkillTile>
                    <SkillTile>React</SkillTile>
                    <SkillTile>Redux</SkillTile>
                </section>
            </article>
        );
    }
}