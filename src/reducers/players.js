// src/reducers/players.js

export default (currentState = [], { type, payload } = {}) => {
  switch (type) {
    case 'FETCHED_PLAYERS' :
      return [].concat(payload)

    case 'UPDATED_PLAYER' :
      return currentState.map(player => {
        if (player.id !== payload.id) return player
        return { ...payload }
      })
    
    default :
      return currentState
  }
}
