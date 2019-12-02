import React from 'react'
import PropTypes from 'prop-types';
import { Col, Navbar, Nav } from 'react-bootstrap'

import LevelCounter from './LevelCounter'
import PlayResetButton from './PlayResetButton'
//import StrictButton from './StrictButton'

const ControlBar = (props) => (
  <Col xs={12} className='no-padding'>
  	<Navbar>
      <Nav>
        <PlayResetButton
          turn={props.turn}
          handlePlayClick={props.handlePlayClick}
          handleResetClick={props.handleResetClick} />
      </Nav>
  		<LevelCounter
  			level={props.level} />
    </Navbar>
  </Col>
)
ControlBar.propTypes =  {
	turn: PropTypes.string,
	level: PropTypes.number.isRequired,
	strict: PropTypes.bool.isRequired,
	handlePlayClick: PropTypes.func.isRequired,
	handleStrictClick: PropTypes.func.isRequired,
	handleResetClick: PropTypes.func.isRequired
}

export default ControlBar
