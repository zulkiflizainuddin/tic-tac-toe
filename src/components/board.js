import React, {useState} from 'react';
import Popup from './popup';
import Games from './start-game';
import Reset from './reset-game';
import PlayersName from './players-name';
import DisplayTicTacToe from './render-game';
import DetermineStatus from './game-status';
import '../index.css';

function Board() {
  const [ squares, setSquares ] = useState(Array(9).fill(null))
  const [ isXNext, setXNext ] = useState(true)                                
  const [ playerOneName, setPlayerOneName ] = useState('')
  const [ playerTwoName, setPlayerTwoName ] = useState('')
  const [ playerSequence, setPlayerSequence ] = useState(Array().fill(null))
  const [ initialMatch, setInitialMatch] = useState(false)
  const [ popupButton, setPopupButton]  = useState(false)

  return (
    <div>
      <PlayersName
      playerOneName={playerOneName}
      playerTwoName={playerTwoName}
      setPlayerOneName={setPlayerOneName}
      setPlayerTwoName={setPlayerTwoName}
      />
      <Games
      initialMatch={initialMatch}
      setInitialMatch={setInitialMatch}
      playerOneName={playerOneName}
      playerTwoName={playerTwoName}
      setPopupButton={setPopupButton}
      />
      <Popup trigger={popupButton} setTrigger={setPopupButton}>
        <h4>Enjoy the match {playerOneName} and {playerTwoName}</h4>
      </Popup>
      <br/>
      <DetermineStatus
      isXNext={isXNext}
      playerOneName={playerOneName}
      playerTwoName={playerTwoName}
      playerSequence={playerSequence}
      squares={squares}
      />
      <DisplayTicTacToe
      isXNext={isXNext}
      setXNext={setXNext}
      squares={squares}
      setSquares={setSquares}
      initialMatch={initialMatch}
      />
      <Reset
      setSquares={setSquares}
      setXNext={setXNext}
      setPlayerOneName={setPlayerOneName}
      setPlayerTwoName={setPlayerTwoName}
      setPlayerSequence={setPlayerSequence}
      setInitialMatch={setInitialMatch}
      />
    </div>
  )
}

export default Board