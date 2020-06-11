import React from 'react'
import Card from './Card'


export default class User extends React.Component {
    render() {

        return (
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
        );
    }
}