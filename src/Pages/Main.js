import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'

const Main = () => (
    <article className="content-wrap section_space-v_xl">
        <h1><span className="gradient-color">Здравствуйте,</span> я Кузнецов Илья - </h1>
        <h2 className="primary-text_indent-b_l">
            Верстальщик из Волгограда.
            В настоящее время работаю над версткой в компании Danfoss Russia.
            </h2>
        <Link to={`/skills`}>
            <Button icon="chevron-right">Мои навыки</Button>
        </Link>
    </article>
)

export default Main