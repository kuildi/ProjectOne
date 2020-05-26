import React from 'react'
import $ from 'jquery'


export default class Skills extends React.Component {
    constructor(props) {
        super(props)

        this.openTile = this.openTile.bind(this);

        this.state = {
            active: false
        }
    }

    openTile() {
        var $cell = $('.tile');
        //open and close tile when clicked on tile
        $cell.find('.js-expander').click(function () {
    
            var $thisCell = $(this).closest('.tile');
    
            if ($thisCell.hasClass('is-collapsed')) {
                $cell.not($thisCell).removeClass('is-expanded').addClass('is-collapsed').addClass('is-inactive');
                $thisCell.removeClass('is-collapsed').addClass('is-expanded');
    
                if ($cell.not($thisCell).hasClass('is-inactive')) {
                    //do nothing
                } else {
                    $cell.not($thisCell).addClass('is-inactive');
                }
    
            } else {
                $thisCell.removeClass('is-expanded').addClass('is-collapsed');
                $cell.not($thisCell).removeClass('is-inactive');
            }
        });
    }

render() {
    return (
        <div className="tile is-collapsed" onClick={this.openTile}>
            <section className="tile__inner js-expander">
                <div className={"icon " + this.props.iconClass}></div>
                <p>{this.props.children}</p>
            </section>
            <section className="tile__expander">
                <p className="js-collapser">Expander</p>
            </section>
        </div>
    );
}
}