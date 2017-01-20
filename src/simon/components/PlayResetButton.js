import React, { PropTypes } from 'react'
import { NavItem, Glyphicon } from 'react-bootstrap'

const PlayResetButton = (props) => {
  let obj = {
    onClick: props.handlePlayClick,
    status: 'Play',
    glyph: 'play'
  }
	if (props.turn !== null) {
    obj = {
      onClick: props.handleResetClick,
      status: 'Restart',
      glyph: 'repeat'
    }
	}
  return (
    <NavItem onClick={obj.onClick}>
      <p><Glyphicon glyph={obj.glyph} /> {obj.status}</p>
    </NavItem>
  )
}
PlayResetButton.propTypes =  {
	turn: PropTypes.string,
	handlePlayClick: PropTypes.func.isRequired,
	handleResetClick: PropTypes.func.isRequired
}

export default PlayResetButton
