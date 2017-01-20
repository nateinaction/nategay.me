import React, { PropTypes } from 'react'

const GameButton = (props) => {
	let classes = 'game-button game-button-' + props.id
	classes = (props.activeId === props.id) ? classes + ' active-button' : classes
	return <div className={classes} onClick={() => props.handleButtonClick(props.id)} />
}
GameButton.propTypes =  {
	id: PropTypes.number.isRequired,
	activeId: PropTypes.number,
	handleButtonClick: PropTypes.func.isRequired
}

export default GameButton
