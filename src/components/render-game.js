import React from 'react'
import Square from './square'
import CalculateWinner from './calculate-winner'

function DisplayTicTacToe({isXNext, setXNext, squares, setSquares, initialMatch}) {
    return (
        <React.Fragment>
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
        </React.Fragment>
    )
    function renderSquare(i) {
        if (initialMatch) {
        return <Square
        value={squares[i]}
        onClick={() => {
          const nextSquares = squares.slice()
          if (CalculateWinner(squares) || squares[i]) {
            return;
          }
          nextSquares[i] = isXNext ? `X` : 'O'
          setXNext(!isXNext)
          setSquares(nextSquares)
        }}/>
        } 
    }
}

export default DisplayTicTacToe
 


