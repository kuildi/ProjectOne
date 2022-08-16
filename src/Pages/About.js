import React from 'react'
import Button from '../components/Button'
import Image from '../components/Image'
import imageFirst from '../Images/first.jpg'
import imageSecond from '../Images/second.jpg'
import imageThird from '../Images/third.jpg'

const About = () => (

    <article className="content-wrap section_space-v_l">
        <section className="grid-container grid-container_about grid-container_indent-b_l">
            <div className="tile-about grid-container__section-work">
                <p className="text_primary">
                Занимался версткой и frontend частью одного из продуктов компании. Отвечал за планирование спринтов по верстке, координировал работу коллег с версткой и стилями, учавствовал в разработке новых фич приложения.

                Достижения за время работы над проектом:
                реализовал редизайн приложения,
                внедрил БЭМ и компонентный подход к верстке,
                SVG-спрайты,
                описал принципы написания HTML и CSS кода,
                рефакторинг CSS.              
                </p>
            </div>
            <div className="tile-about grid-container__section-education">
                <p className="text_primary">
                    Окончил ВолгГТУ, факультет электроники и вычеслительной техники по направлению “Системы автоматизированного проектирования и поискового конструирования”.
                </p>
                <p className="text_primary">
                    Для повышения уровня английского языка занимался в онлайн школе SkyEng.
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
                <p className="text_primary">
                    Интересуюсь веб-дизайном. Постоянно в поиске новых знаний. Готов к нестандартным, интересным задачам, которые позволят профессионально расти.
                    Цель - делать крутые, востребованные и качественные веб-приложения с заботой о пользователе.
                    </p>
            </div>
        </section>
        <a href="mailto:kuildi@yandex.ru">
            <Button icon="mail">Связаться со мной</Button>
        </a>
    </article>
)

export default About