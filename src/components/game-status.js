import CalculateWinner from "./calculate-winner"

function DetermineStatus({i , isXNext, playerOneName, playerTwoName, playerSequence, squares }) {
    const winner = CalculateWinner(squares)
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

export default DetermineStatus