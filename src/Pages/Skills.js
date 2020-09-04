import React from 'react'
import SkillTile from '../components/SkillTile'

const Skills = () => {

    const skillsData = [
        { id: "HTML", icon: "html5", title: "HTML5" },
        { id: "CSS", icon: "css3", title: "CSS3 / SASS" },
        { id: "JS", icon: "JS", title: "JavaScript / JQuery" },
        { id: "React", icon: "react", title: "React.js" },
        { id: "Redux", icon: "redux", title: "Redux" },
        { id: "Webpack", icon: "webpack", title: "Webpack" },
        { id: "Git", icon: "git", title: "Git" },
        { id: "Design", icon: "photoshop", title: "Работа с макетами" },
        { id: "Bootstrap", icon: "bootstrap", title: "Bootstrap / Materialize" },
        { id: "Responsive", icon: "responsive", title: "Адаптивная верстка" },
        { id: "Bem", icon: "bem", title: "БЭМ методология" },
        { id: "Compability", icon: "IE", title: "Кроссбраузерная верстка" }
    ];

    let skills = skillsData.map((skill, index) => {
        return <SkillTile key={index} tabIndex={index} tileId={skill.id} iconClass={skill.icon}>{skill.title}</SkillTile>
    });

    return (
        <article className="content-wrap section_space-v_l">
            <h1 className="gradient-color">Умения</h1>
            <section className="tiles">
                {skills}
                <p className="text_primary">Что бы поближе познакомиться с примером моего кода, прошу заглянуть в <a className="text_link" href="https://github.com/kuildi/ProjectOne">репозитрий</a> данного сайта на Github.</p>
            </section>
        </article>
    );
}

export default Skills   