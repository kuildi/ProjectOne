import React from 'react'
import Icon from './Icon'


export default class Skills extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isExpanded: false
        }
        this.expandTile = this.expandTile.bind(this);
        this.collapseTile = this.collapseTile.bind(this);
    }

    expandTile() {
        this.setState({ isExpanded: true })
    }

    collapseTile() {
        this.setState({ isExpanded: false })
    }
    

    render() {
        return (
            <div
                id={this.props.tileId}
                tabIndex={this.props.tabIndex}
                className={`tile ${this.state.isExpanded ? 'tile_expanded' : 'tile_collapsed'}`}
                onClick={this.expandTile}
                onBlur={this.collapseTile}
            >
                <section className="tile__inner">
                    <Icon class="tile__icon" name={this.props.iconClass} />
                    <p>{this.props.title}</p>
                </section>
                <section className="tile__expander">
                    {/* <p>{this.state.isExpanded && this.props.children}</p> */}
                    <p className='tile__text'>{this.props.children}</p>
                </section>
            </div>
        );
    }
}