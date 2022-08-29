import React from 'react'

function Reset({setSquares, setXNext, setPlayerOneName, setPlayerTwoName, setPlayerSequence, setInitialMatch}) {
    return (
        <React.Fragment>
            <button onClick={() => autoRefresh()} className="btn-danger">Refresh</button>
        </React.Fragment>
    )

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
}

export default Reset


