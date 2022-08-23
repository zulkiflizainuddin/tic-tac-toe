import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Square({value, onClick}) {
  return (
    <button
      className="square"
      onClick={onClick}>  
        {value}
      </button>
  ) // to register the click and value assign to the squares
}

function Board() {
  const [ squares, setSquares ] = useState(Array(9).fill(null))   // basically create an array of null element all the box
  const [ isXNext, setXNext ] = useState(true)                     // allowing the first move to be X

  function renderSquare(i) {
    return <Square
      value={squares[i]}
      onClick={() => {
        const nextSquares = squares.slice()               // separate the array into individual element
        if (calculateWinner(squares) || squares[i]) {
          return;
        }
        nextSquares[i] = isXNext ? 'X' : 'O'              //trinary operator to decide whether the next move is X or O
        setXNext(!isXNext)                                // updating the initial state
        setSquares(nextSquares)                           // switching the boolean of xIsNext into false or true
      }}/>
  }

  function determineStatus() {
    const winner = calculateWinner(squares)
    let status = ''
    if (winner) {
      status = `Winner, Winner, Chicken Dinner!! Player: ${winner} triumphed`
    } else {
      status = `Player: ` + (isXNext ? 'X' : 'O') + ` turns to move`
    }
    return status
  }

  function autoRefresh() {
    return setSquares(Array(9).fill(null))

  }

  return (
    <div>
    <div className="status">{determineStatus()}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <div>
        <button onClick={() => autoRefresh()} className="btn btn-danger b">Refresh</button></div>
    </div>
  )
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);

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
