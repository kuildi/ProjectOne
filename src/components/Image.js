import React from 'react'

export default class Image extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEnlarged: false
        }

        this.enlargedImg = this.enlargedImg.bind(this);
        this.commonImg = this.commonImg.bind(this);
    }

    enlargedImg() {
        this.setState({ isEnlarged: true })
    }

    commonImg() {
        this.setState({ isEnlarged: false })
    }

    render() {
        return (
            <img
                className={`photo photo_rounded ${this.state.isEnlarged ? 'photo_enlarged' : ''}`}
                src={this.props.source}
                alt="Its me"
                tabIndex="0"
                onClick={this.enlargedImg}
                onBlur={this.commonImg}
            />
        );
    }
}