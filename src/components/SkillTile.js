import React from 'react'
import $ from 'jquery'


export default class Skills extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        switch (this.props.tileId) {
            case 'HTML': {
                var expandedContent = 'HTML5 marckup languege'
                break;
            }
            case 'CSS': {
                expandedContent = 'CSS3 style languege'
                break;
            }
            case 'JS': {
                expandedContent = 'JavaScript'
                break;
            }
            case 'React': {
                expandedContent = 'React is strong'
                break;
            }
            case 'Redux': {
                expandedContent = 'Redux'
                break;
            }
            case 'Webpack': {
                expandedContent = 'Webpack'
                break;
            }
            case 'Git': {
                expandedContent = 'git'
                break;
            }
            case 'Design': {
                expandedContent = 'For makets'
                break;
            }
            case 'Bootstrap': {
                expandedContent = 'Bootstrap and materialize'
                break;
            }
            case 'Responsive': {
                expandedContent = 'responsive'
                break;
            }
            case 'Bem': {
                expandedContent = 'Bem from yandex'
                break;
            }
            case 'Compability': {
                expandedContent = 'compability'
                break;
            }
        }

        return (
            <div className="tile is-collapsed" id={this.props.tileId}>
                <section className="tile__inner js-expander">
                    <div className={"icon " + this.props.iconClass}></div>
                    <p>{this.props.children}</p>
                </section>
                <section className="tile__expander">
                    {/* <p className="js-collapser">Expander</p> */}
                    {expandedContent}
                </section>
            </div>
        );
    }
}