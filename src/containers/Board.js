// src/containers/Board.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Title from '../components/Title'
import Player, { playerShape } from '../components/Player'
import './Board.css'

export default class Board extends PureComponent {
  static propTypes = {
    players: PropTypes.arrayOf(playerShape).isRequired,
    updatePlayer: PropTypes.func.isRequired
  }

  renderPlayers() {
    const { players, updatePlayer } = this.props

    return players
      .concat()
      .sort((p1, p2) => (p2.score - p1.score))
      .map((player, index) => (
        <Player
          onChange={updatePlayer}
          key={index} { ...player }
        />
      ))
  }

  render() {
    return (
      <div>
        <Title content="Scoreboard" />
        <ul className="Board">
          {this.renderPlayers()}
        </ul>
      </div>
    )
  }
}
