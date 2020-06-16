import React from 'react';
import lottie from 'lottie-web';
import animation from '../Animations/gaming-on-phone.json';
import Button from '../components/Button';

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
                <div className="grid-container__section_xl tile-about tile-about_flex">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam nobis nihil exercitationem ab error voluptatem repudiandae magni beatae quibusdam velit corrupti animi quia dolorum, accusamus dicta rerum, explicabo perferendis.</p>
                    <div id="animated-img"></div>
                </div>
                <div className="grid-container__section_m tile-about">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, soluta, sunt nihil illum at, suscipit voluptate rem repellat veniam temporibus officiis cumque ratione optio nostrum laboriosam praesentium doloremque dicta vel!</p>
                </div>
                <div className="grid-container__section_s tile-about">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, dolores. Libero similique tempora tempore ipsum aut, ullam alias voluptas id quia commodi illum repellendus assumenda mollitia neque. Quos, nesciunt quod.</p>
                </div>
            </section>
            <a href="mailto:kuildi@yandex.ru">
                <Button icon="mail">Связаться со мной</Button>
            </a>
        </article>
    );
}