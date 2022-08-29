import React from 'react'

function Games({initialMatch, setInitialMatch, playerOneName, playerTwoName, setPopupButton}) {
    return (
        <React.Fragment>
            <br/>
            <button onClick={() => startGame(initialMatch)}>Start Game</button>
        </React.Fragment>
    )

    function startGame() {
        if (playerOneName !== '' && playerTwoName !== '') {
          setInitialMatch(initialMatch => !initialMatch)
          setPopupButton(popupButton => !popupButton)
        }
    }
}

export default Games