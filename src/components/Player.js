// src/components/Player.js

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { plusOne as plusOneAction } from '../actions/players'
import PlusOneButton from './PlusOneButton'
import './Player.css'

export const playerShape = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired
})

export class Player extends PureComponent {
  static propTypes = {
    ...playerShape.isRequired,
    onChange: PropTypes.func.isRequired
  }

  plusOne = () => {
    const { id, onChange } = this.props
    onChange(id)
  }

  render() {
    const { name, score } = this.props

    return (
      <li className="Player">
        <p className="name">{name}</p>
        <p className="score">{score}</p>
        <PlusOneButton onClick={this.plusOne} />
      </li>
    )
  }
}

export default connect(null, { onChange: plusOneAction })(Player)
