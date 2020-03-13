import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClick } from '../actions/action';
import Cell from './Cell';

class Table extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.buiderCell = this.buiderCell.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this);
  }

  buiderCell(position, keys) {
    const { squares } = this.props;
    return (
      <Cell
        key={`${keys} `}
        value={squares[position]}
        onClick={() => this.handleClick(position)}
      />
    );
  }

  handleClick(index) {
    const { squares, selected, functClicks } = this.props;

    const square = squares;

    if (this.calculateWinner(squares) || squares[index]) return;

    square[index] = selected ? 'X' : 'O';
    console.log('trocar a figura', square);
    functClicks({
      squares: square,
      selected: !selected,
    });
  }

  calculateWinner(squares) {
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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return null;
  }

  render() {
    const { squares, selected } = this.props;

    const repeter = (value) => value.map((v, ind) => this.buiderCell(ind, ind));
    const winner = this.calculateWinner(squares);
    const status = (win) => {
      if (win) {
        return `Vencedor: ${win}!!! S2`;
      } else if (!squares.includes(null)) {
        return 'Empate';
      } else {
        return `Próximo Jogador:  ${selected ? 'X' : 'O'}`;
      }
    };

    return (
      <div>
        <hi>{status(winner)}</hi>
        <div className="tabuleiro">{repeter(squares)}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ reducer: { squares, selected } }) => ({
  squares,
  selected,
});

const mapDispatchToProps = (dispatch) => ({
  functClicks: (value) => dispatch(getClick(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Table);
