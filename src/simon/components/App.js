import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'

import GameLayout from './GameLayout'
import ControlBar from './ControlBar'

const SimonApp = (props) => (
  <Col className='simon-app' xs={12} md={5}>
    <GameLayout
    	active={props.active}
    	handleButtonClick={props.handleButtonClick} />
    <ControlBar
    	turn={props.turn}
    	level={props.level}
    	strict={props.strict}
     	handlePlayClick={props.handlePlayClick}
    	handleStrictClick={props.handleStrictClick}
    	handleResetClick={props.handleResetClick} />
  </Col>
)
SimonApp.propTypes =  {
	turn: PropTypes.string,
	level: PropTypes.number.isRequired,
	strict: PropTypes.bool.isRequired,
  active: PropTypes.object.isRequired,
	handleButtonClick: PropTypes.func.isRequired,
	handlePlayClick: PropTypes.func.isRequired,
	handleStrictClick: PropTypes.func.isRequired,
	handleResetClick: PropTypes.func.isRequired
}

export default SimonApp
