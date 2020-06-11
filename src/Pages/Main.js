import React from 'react';
import { Link } from 'react-router-dom'
import Button from '../components/Button';

export default function Main() {
    return (
        <article className="content-wrap section_space-v_xl">
            <h1><span className="gradient-color">Здравствуйте,</span> я Кузнецов Илья - </h1>
            <p className="primary-text primary-text_indent-b_l">
                Начинающий фронтенд разработчик из Волгограда.
                <br/> В настоящее время работаю над версткой в компании Danfoss.
            </p>
            <Button icon="chevrone">
                <Link to={`/skills`}>Мои навыки</Link>
            </Button>
        </article>
    );
}