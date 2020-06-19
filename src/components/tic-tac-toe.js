import React from 'react'
import ReactDOM from 'react-dom'
import Button from './Button'

import '../Styles/tic-tac-toe.scss'

function Square(props) {
    return (
        <button className="square" onClick={props.onClick}>
            <p className="gradient-color">{props.value}</p>
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return <Square
            value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)}
        />;
    }

    render() {
        return (
            <>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </>
        );
    }
}

export default class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            xIsNext: true,
            stepNumber: 0
        }
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        })
    }

    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                `Вернуться к шагу # ${move}` :
                'Начать сначала';
            return (
                <li key={move}>
                    <Button onClick={() => this.jumpTo(move)}> {desc} </Button>
                </li>
            )
        });

        let status;
        if (winner) {
            status = `Победил ${winner}!`;
        } else {
            status = `Следующий игрок: ${(this.state.xIsNext ? 'X' : 'O')}`;
        }

        return (
            <article className="grid-container">
                <p className="grid-container__section_full-w">Данные крестики нолики релизованы при помощи ReactJS, как и весь сайт.</p>
                <section className="game__board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)} />
                </section>
                <section className="game__info">
                    <p>{status}</p>
                    <ul>{moves}</ul>
                </section>
            </article>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}
