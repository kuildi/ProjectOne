import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

export default class PostItem extends React.Component {
    render() {
        return (
            <>
                <article>
                    <Link to={`/users/${this.props.userId}`}>
                        <Card header={this.props.title} text={this.props.body} />
                    </Link>
                </article>
            </>
        );
    }
}