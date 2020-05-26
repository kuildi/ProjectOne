import React from 'react';
import Posts from '../components/Posts';
import Game from '../components/tic-tac-toe';
import SkillTile from '../components/SkillTile';

export default class Skills extends React.Component {



    render() {

        return (
            <article className="content-wrap section_space-v_l">
                <h1 className="gradient-color">Skills</h1>
                <section className="tiles">
                    <SkillTile>HTML5</SkillTile>
                    <SkillTile>CSS3 / SASS</SkillTile>
                    <SkillTile>JavaScript / JQuery</SkillTile>
                    <SkillTile>React.js</SkillTile>
                    <SkillTile>Redux</SkillTile>
                    <SkillTile>Webpack</SkillTile>
                    <SkillTile>Git</SkillTile>
                    <SkillTile>Photoshop / Figma (as developer)</SkillTile>
                    <SkillTile>Bootstrap / Materialize</SkillTile>
                    <SkillTile>Responsive Layout</SkillTile>
                    <SkillTile>BEM Methodology (naming convention)</SkillTile>
                    <SkillTile>Cross-Browser Compatibility</SkillTile>
                </section>
            </article>
        );
    }
}