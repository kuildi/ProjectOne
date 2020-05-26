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
                    <SkillTile tileId="HTML">HTML5</SkillTile>
                    <SkillTile tileId="CSS">CSS3 / SASS</SkillTile>
                    <SkillTile tileId="JS">JavaScript / JQuery</SkillTile>
                    <SkillTile tileId="React">React.js</SkillTile>
                    <SkillTile tileId="Redux">Redux</SkillTile>
                    <SkillTile tileId="Webpack">Webpack</SkillTile>
                    <SkillTile tileId="Git">Git</SkillTile>
                    <SkillTile tileId="Design">Photoshop / Figma (as developer)</SkillTile>
                    <SkillTile tileId="Bootstrap">Bootstrap / Materialize</SkillTile>
                    <SkillTile tileId="Responsive">Responsive Layout</SkillTile>
                    <SkillTile tileId="Bem">BEM Methodology (naming convention)</SkillTile>
                    <SkillTile tileId="Compability">Cross-Browser Compatibility</SkillTile>
                </section>
            </article>
        );
    }
}