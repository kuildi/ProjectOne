import React from 'react';
import Button from '../components/Button';
import Image from '../components/Image';
import imageFirst from '../img/first.jpg';
import imageSecond from '../img/second.jpg';
import imageThird from '../img/third.jpg';

export default function About() {

    return (
        <article className="content-wrap section_space-v_l">
            <section className="grid-container grid-container_about grid-container_indent-b_l">
                <div className="tile-about grid-container__section-work">
                    <p className="primary-text">На текущем месте работы отвечаю за верстку и переход проекта на новый дизайн. Координирую работу нескольких коллег, провожу кодревью.
                    </p>
                    <p className="primary-text">
                        Занимаюсь рефакторингом стилей, внедрением семантики HTML5 и БЭМ. Написал styleguide для HTML и CSS. 
                        Учавствую в обсуждении нового функционала.
                    </p>
                </div>
                <div className="tile-about grid-container__section-education">
                    <p className="primary-text">
                        Окончил ВолгГТУ, факультет электроники и вычеслительной техники по направлению “Системы автоматизированного проектирования и поискового конструирования”.
                        </p>
                    <p className="primary-text">
                        Для повышения уровня английского языка занимался в онлайн школе SkyEng.
                        </p>
                    <p className="primary-text">
                        Начал свой путь в React с курса GeekBrains ReactJS.
                        </p>
                </div>
                <div className="grid-container__section-photo_first">
                    <Image source={imageFirst} />
                </div>
                <div className="grid-container__section-photo_second">
                    <Image source={imageSecond} />
                </div>
                <div className="grid-container__section-photo_third">
                    <Image source={imageThird} />
                </div>
                <div className="tile-about grid-container__section-hobby">
                    <p className="primary-text">
                        Интересуюсь веб-дизайном, стараюсь пополнять знания о новых технологиях и развивать свои навыки.
                        Цель - делать крутой, востребованный и качественный продукт с заботой о пользователе.
                    </p>
                </div>
            </section>
            <a href="mailto:kuildi@yandex.ru">
                <Button icon="mail">Связаться со мной</Button>
            </a>
        </article>
    );
}