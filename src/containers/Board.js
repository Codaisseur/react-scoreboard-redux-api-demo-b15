// src/containers/Board.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Title from '../components/Title'
import Player, { playerShape } from '../components/Player'
import { fetchPlayers } from '../actions/players'
import './Board.css'

export class Board extends PureComponent {
  static propTypes = {
    players: PropTypes.arrayOf(playerShape).isRequired,
    fetchPlayers: PropTypes.func.isRequired
  }

  componentWillMount() {
    this.props.fetchPlayers()
  }

  renderPlayers() {
    const { players } = this.props

    return players
      .concat()
      .sort((p1, p2) => (p2.score - p1.score))
      .map((player, index) => (
        <Player key={index} { ...player } />
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

const mapStateToProps = ({ players }) => ({ players })

export default connect(mapStateToProps, { fetchPlayers })(Board)
