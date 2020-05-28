import React from 'react';
import SkillTile from '../components/SkillTile';
import $ from 'jquery'

export default class Skills extends React.Component {

    componentDidMount() {
        var $cell = $('.tile');

        //open and close tile when clicked on tile
        $cell.find('.js-expander').click(function () {
            var $thisCell = $(this).closest('.tile');

            if ($thisCell.hasClass('is-collapsed')) {
                $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
                $thisCell.removeClass('is-collapsed').addClass('is-expanded');

                if ($cell.not($thisCell).hasClass('is-inactive')) {
                    //do nothing
                } else {
                    $cell.not($thisCell).addClass('is-inactive');
                }

            } else {
                $thisCell.removeClass('is-expanded').addClass('is-collapsed');
                $cell.not($thisCell).removeClass('is-inactive');
            }
        });
    }

    render() {

        return (
            <article className="content-wrap section_space-v_l">
                <h1 className="gradient-color">Skills</h1>
                <section className="tiles">
                    <SkillTile tileId="HTML" iconClass="icon_html">HTML5</SkillTile>
                    <SkillTile tileId="CSS" iconClass="icon_css">CSS3 / SASS</SkillTile>
                    <SkillTile tileId="JS" iconClass="icon_js">JavaScript / JQuery</SkillTile>
                    <SkillTile tileId="React" iconClass="icon_react">React.js</SkillTile>
                    <SkillTile tileId="Redux" iconClass="icon_redux">Redux</SkillTile>
                    <SkillTile tileId="Webpack" iconClass="icon_webpack">Webpack</SkillTile>
                    <SkillTile tileId="Git" iconClass="icon_git">Git</SkillTile>
                    <SkillTile tileId="Design" iconClass="icon_design">Photoshop / Figma (as developer)</SkillTile>
                    <SkillTile tileId="Bootstrap" iconClass="icon_bootstrap">Bootstrap / Materialize</SkillTile>
                    <SkillTile tileId="Responsive" iconClass="icon_responsive">Responsive Layout</SkillTile>
                    <SkillTile tileId="Bem" iconClass="icon_bem">BEM Methodology</SkillTile>
                    <SkillTile tileId="Compability" iconClass="icon_compability">Cross-Browser Compatibility</SkillTile>
                </section>
            </article>
        );
    }
}