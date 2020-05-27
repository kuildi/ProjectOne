import React from 'react'
import { Link } from 'react-router-dom';
import Card from './Card'


export default class User extends React.Component {
    render() {

        return (
            <Link to={`/users/${this.props.id}`}>
                <Card header={this.props.name} text={''}>
                    <section>
                        <div className="icon"></div>{this.props.username}
                    </section>
                    <section>
                        <div className="icon"></div>{this.props.email}
                    </section>
                    <section>
                        <div className="icon"></div>{this.props.phone}
                    </section>
                    <section>
                        <div className="icon"></div>{this.props.website}
                    </section>
                </Card>
            </Link>
        );
    }
}