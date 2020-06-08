import React from 'react';
import SkillTile from '../components/SkillTile';
import $ from 'jquery'

export default class Skills extends React.Component {

    componentDidMount() {
        var $cell = $('.tile');

        $cell.find('.js-expander').click(function () {
            var $thisCell = $(this).closest('.tile');

            if ($thisCell.hasClass('is-collapsed')) {
                $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
                $thisCell.removeClass('is-collapsed').addClass('is-expanded');

                $cell.not($thisCell).hasClass('is-inactive') ?
                    '' : $cell.not($thisCell).addClass('is-inactive');
            } else {
                $thisCell.removeClass('is-expanded').addClass('is-collapsed');
                $cell.not($thisCell).removeClass('is-inactive');
            }
        });
    }

    render() {

        const skillsData = [
            { id: "HTML", icon: "icon_html", title: "HTML5" },
            { id: "CSS", icon: "icon_css", title: "CSS3 / SASS" },
            { id: "JS", icon: "icon_js", title: "JavaScript / JQuery" },
            { id: "React", icon: "icon_react", title: "React.js" },
            { id: "Redux", icon: "icon_redux", title: "Redux" },
            { id: "Webpack", icon: "icon_webpack", title: "Webpack" },
            { id: "Git", icon: "icon_git", title: "Git" },
            { id: "Design", icon: "icon_design", title: "Photoshop / Figma (as developer)" },
            { id: "Bootstrap", icon: "icon_bootstrap", title: "Bootstrap / Materialize" },
            { id: "Responsive", icon: "icon_responsive", title: "Responsive Layout" },
            { id: "Bem", icon: "icon_bem", title: "BEM Methodology" },
            { id: "Compability", icon: "icon_compability", title: "Cross-Browser Compatibility" }
        ];

        let skills = skillsData.map((skill, index) => {
			return <SkillTile key={index} tileId={skill.id} iconClass={skill.icon}>{skill.title}</SkillTile>
		});

        return (
            <article className="content-wrap section_space-v_l">
                <h1 className="gradient-color">Умения</h1>
                <section className="tiles">
                    {skills}
                </section>
            </article>
        );
    }
}