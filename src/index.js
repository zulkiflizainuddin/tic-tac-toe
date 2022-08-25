import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Square from './Square'
import Popup from './popup'
import './index.css';

function Board() {
  const [ squares, setSquares ] = useState(Array(9).fill(null))               // basically create an array of null element all the box
  const [ isXNext, setXNext ] = useState(true)                                // allowing the first move to be X
  const [ playerOneName, setPlayerOneName ] = useState('')
  const [ playerTwoName, setPlayerTwoName ] = useState('')
  const [ playerSequence, setPlayerSequence ] = useState(Array().fill(null))
  const [ initialMatch, setInitialMatch] = useState(false)
  const [ popupButton, setPopupButton]  = useState(false)
 
  function startGame() {
    if (playerOneName !== '' && playerTwoName !== '') {
      setInitialMatch(initialMatch => !initialMatch)
      setPopupButton(popupButton => !popupButton)
    }
  }

  function renderSquare(i) {
    if (initialMatch) {
    return <Square
    value={squares[i]}
    onClick={() => {
      const nextSquares = squares.slice()                                    // separate the array into individual element
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      nextSquares[i] = isXNext ? `X` : 'O'                                   //trinary operator to decide whether the next move is X or O
      setXNext(!isXNext)                                                     // updating the initial state
      setSquares(nextSquares)                                                // switching the boolean of xIsNext into false or true
    }}/>
    } 
  }

  function determineStatus(i) {
    const winner = calculateWinner(squares)
    let nextPlayer = ''
    nextPlayer = isXNext ? `${playerOneName}` : `${playerTwoName}`
    let status = ''
    if (winner) {
      status = `Winner, Winner, Chicken Dinner!! Player: ${ playerSequence[playerSequence.length-1] } (${winner}) triumphed`
    } else { 
      status = `Player: ${ nextPlayer } ` + (isXNext ? '(X)' : '(O)') + ` turns to move`
    }
    playerSequence.push(nextPlayer)
    return (
      status
    )
  }

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
  
  function autoRefresh() {
    return (
      setSquares(Array(9).fill(null)),
      setXNext('X'),
      setPlayerOneName(''),
      setPlayerTwoName(''),
      setPlayerSequence(Array()),
      setInitialMatch(false)
    )
  }

  return (
    <div>
      <h4>Input Player Name</h4>
      <form>
        <label>Player X :</label>
        <input
        require type="player one name"
        value={playerOneName}
        onChange={(e) => setPlayerOneName(e.target.value)}/>
      </form>
      <form>
        <label>Player O :</label>
        <input
        required type="player two name"
        value={playerTwoName}
        onChange={(e) => setPlayerTwoName(e.target.value)}/>
      </form>
      <button onClick={() => startGame(initialMatch)}>Start Game</button>
      <Popup trigger={popupButton} setTrigger={setPopupButton}>
        <h4>Enjoy the match {playerOneName} and {playerTwoName}</h4>
      </Popup>
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
        <button onClick={() => autoRefresh()} className="btn-danger">Refresh</button></div>
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

