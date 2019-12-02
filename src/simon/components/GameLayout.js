import React from 'react'
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap'
import GameButton from './GameButton'

const GameLayout = (props) => {
	let buttonIds = [0, 1, 2, 3]
	return (
		<div>
			{buttonIds.map((index) => (
				<Col key={index} xs={6} className='no-padding'>
					<GameButton
						id={index}
						activeId={props.active.id}
						handleButtonClick={props.handleButtonClick} />
				</Col>
			))}
		</div>
	)
}
GameLayout.propTypes =  {
	active: PropTypes.object.isRequired,
	handleButtonClick: PropTypes.func.isRequired
}

export default GameLayout
