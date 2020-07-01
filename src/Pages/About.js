import React from 'react';
import lottie from 'lottie-web';
import animation from '../Animations/editor.json';
import Button from '../components/Button';

import image from '../img/first.jpg';

export default function About() {
    React.useEffect(() => {
        lottie.loadAnimation({
            container: document.querySelector("#animated-img"),
            animationData: animation
        });
    }, []);

    return (
        <article className="content-wrap section_space-v_l">
            <section className="grid-container grid-container_about grid-container_indent-b_l">
                <div className="grid-container__section_xl grid-container__sub-grid">
                    <div className="tile-about tile-about_flex">
                        <p className="primary-text">
                            Окончил ВолгГТУ, факультет электроники и вычеслительной техники по направлению “Системы автоматизированного проектирования и поискового конструирования”.
                            Дипломный проект "Разработка интерактивного робота и веб-приложения для его управления".
                        </p>
                    </div>
                    <section>
                        <img className="photo photo_rounded" src={image} alt="Its me" />
                        <img className="photo photo_rounded" src={image} alt="Its me" />
                        <img className="photo photo_rounded" src={image} alt="Its me" />
                    </section>
                </div>
                <div className="grid-container__section_xxl grid-container__sub-grid">
                    <div className="tile-about">
                        <p className="primary-text">На текущем месте отвечаю за верстку и переход проекта на новый дизайн. Координирую работу двух коллег при работе с версткой. Делаю кодревью всех задач, затрагивающих верстку и стили проекта.
                        Занимаюсь рефакторингом стилей и внедрением семантики HTML5.
                        </p>
                        <br />
                        <p className="primary-text">Так же в своей работе использую JavaScript для создания различных интерактивностей.</p>
                    </div>
                    <div className="tile-about">
                        <p className="primary-text">Люблю футбол, музыку, вкусную еду, свою девушку и кота. Интересуюсь веб-дизайном, фильмами и игровой индустрией. Занимался английским в онлайн школе SkyEng, улучшил свой уровень до Intermediate.</p>
                    </div>
                </div>
            </section>
            <a href="mailto:kuildi@yandex.ru">
                <Button icon="mail">Связаться со мной</Button>
            </a>
        </article>
    );
}