import React from 'react'
import SkillTile from '../components/SkillTile'

const Skills = () => {

    const skillsData = [
        { id: "HTML", icon: "html5", title: "HTML5", 
        text:`Данный язык используется мной для базового представления и структурирования
        содержимого сайтов. В своей работе я предпочитаю использовать стандарт HTML5 для более точного описания содержимого страниц,
        что способствует улучшению приоритезации контента сайта.` },
        { id: "CSS", icon: "css3", title: "CSS3 / SASS", 
        text:`CSS — язык описания внешнего вида HTML-документа. Это одна из базовых технологий в современном интернете. CSS взаимодействует с браузером, чтобы придать документу оформление.
        Sass позволяет мне использовать функции недоступные в самом CSS, например, переменные, вложенности, наследование и другие приятные вещи, возвращающие удобство написания CSS.` },
        { id: "JS", icon: "JS", title: "JavaScript / JQuery", 
        text:`JavaScript язык программирования, который я использую для создания динамически обновляемого контента, анимации блоков, частичной обработки информации и вывода ее на страницу.
        jQuery — библиотека JavaScript, фокусирующийся на взаимодействии JavaScript и HTML. jQuery помогает легко получать доступ к любому элементу HTML, обращаться к его атрибутам и содержимому и манипулировать ими.` },
        { id: "React", icon: "react", title: "React.js", 
        text:`React — JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов.
        Его цель — предоставить высокую скорость, простоту и масштабируемость.` },
        { id: "Redux", icon: "redux", title: "Redux", 
        text:`Redux — библиотека управления состоянием для приложений, написанных на JavaScript.
        Он помогает писать приложения, которые ведут себя последовательно, работают в разных средах, легко тестируемые и масштабируемые.` },
        { id: "Webpack", icon: "webpack", title: "Webpack", 
        text:`Webpack — это инструмент, позволяющий скомпилировать, например, несколько JavaScript файлов в единый JS-файл. Это очень удобно при компонентной разработке.` },
        { id: "Git", icon: "git", title: "Git", 
        text:`Git — система контроля версий. Она позволяет сохранять и отслеживать все изменения внесенные в код, и при необходимости возвращаться к предыдущим версиям файлов.
        Без системы контроля версий сложно представить командную разработку.` },
        { id: "Design", icon: "photoshop", title: "Работа с макетами", 
        text:`При верстке страниц часто необходимо свериться с сеткой макета или забрать из него изображения. Имею опыт работы в Photoshop и Figma.` },
        { id: "Bootstrap", icon: "bootstrap", title: "Bootstrap / Materialize", 
        text:`Популярные фронтенд библиотеки для создания сайтов. Могут быть полезны для быстрой разработки демо версий проектов.` },
        { id: "Responsive", icon: "responsive", title: "Адаптивная верстка", 
        text:`Адаптивная верстка - одно из ключевых требований к соверменным сайтам и веб-приложениям. Основная цель добиться правильного отображения и доступности всего контента страниц на всех возможных устройствах.` },
        { id: "Bem", icon: "bem", title: "БЭМ методология", 
        text:`БЭМ (Блок, Элемент, Модификатор) — компонентный подход к веб-разработке, разработанный в Яндексе. В его основе лежит принцип разделения интерфейса на независимые блоки.
        Он позволяет легко и быстро разрабатывать интерфейсы любой сложности и повторно использовать существующий код, избегая «Copy-Paste».` },
        { id: "Compability", icon: "IE", title: "Кроссбраузерная верстка", 
        text:`Некоторые браузеры могут по разному интерпритировать верстку и JavaScript, что может негативно сказаться на пользовательком опыте.
        При кроссбраузерной разработке можно добиться единого вида и поведения сайта во всех браузерах.` }
    ];

    let skills = skillsData.map((skill, index) => {
        return <SkillTile 
                    key={index} 
                    tabIndex={index} 
                    tileId={skill.id} 
                    iconClass={skill.icon}
                    title={skill.title}
                >
                    {skill.text}
                </SkillTile>
    });

    return (
        <article className="content-wrap section_space-v_l">
            <h1 className="gradient-color">Умения</h1>
            <section className="tiles">
                <p className="text_primary">Что бы поближе познакомиться с примером моего кода, прошу заглянуть в <a className="text_link" href="https://github.com/kuildi/ProjectOne">репозитрий</a> данного сайта на Github.</p>
                {skills}
            </section>
        </article>
    );
}

export default Skills   