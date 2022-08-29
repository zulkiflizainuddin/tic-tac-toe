import React from 'react'

function PlayersName({playerOneName, playerTwoName, setPlayerOneName, setPlayerTwoName}) {
    return (
        <React.Fragment>
            <h4>
                Input Player Name
            </h4>
            <form>
                <label>
                    Player X :
                </label>
                <input
                    require type="player one name"
                    value={playerOneName}
                    onChange={(e) => setPlayerOneName(e.target.value)}
                />
            </form>
            <br/>
            <form>
                <label>
                    Player O :
                </label>
                <input
                    required type="player two name"
                    value={playerTwoName}
                    onChange={(e) => setPlayerTwoName(e.target.value)}
                    />
            </form>
        </React.Fragment>
    )
}

export default PlayersName