import React from 'react';
import Button from '../components/Button'

export default function About() {
    return (
        <article className="content-wrap section_space-v_l">
            <section className="grid-container grid-container_about grid-container_indent-b_l">
                <div className="grid-container__section_xl tile_about">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias magnam nobis nihil exercitationem ab error voluptatem repudiandae magni beatae quibusdam velit corrupti animi quia dolorum, accusamus dicta rerum, explicabo perferendis.</p>
                </div>
                <div className="grid-container__section_m tile_about">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, soluta, sunt nihil illum at, suscipit voluptate rem repellat veniam temporibus officiis cumque ratione optio nostrum laboriosam praesentium doloremque dicta vel!</p>
                </div>
                <div className="grid-container__section_s tile_about">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, dolores. Libero similique tempora tempore ipsum aut, ullam alias voluptas id quia commodi illum repellendus assumenda mollitia neque. Quos, nesciunt quod.</p>
                </div>
            </section>
            <Button icon="mail">Contact me</Button>
        </article>
    );
}