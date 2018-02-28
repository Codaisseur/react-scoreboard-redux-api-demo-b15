import request from 'superagent'

const baseUrl = 'http://localhost:3030'

export const fetchPlayers = () => {
  return (dispatch) => {
    request
      .get(`${baseUrl}/players`)
      .then((response) => {
        const players = response.body
        dispatch({
          type: 'FETCHED_PLAYERS',
          payload: players
        })
      })
      .catch((error) => {
        console.error('Something went wrong!', error)
      })
  }
}

export const plusOne = (playerId) => {
  return (dispatch, getState) => {
    const { players } = getState()
    const player = players.filter(p => p.id === playerId)[0]
    if (!player) return

    request
      .patch(`${baseUrl}/players/${playerId}`)
      .send({ score: player.score + 1 })
      .then((response) => {
        const player = response.body
        dispatch({
          type: 'UPDATED_PLAYER',
          payload: player
        })
      })
      .catch((error) => {
        console.error('Something went wrong!', error)
      })
  }
}
