import React, { PropTypes } from 'react'
import { Navbar } from 'react-bootstrap'

const LevelCounter = (props) => (
	<Navbar.Text><strong>Level</strong> {props.level}</Navbar.Text>
)
LevelCounter.propTypes = {
	level: PropTypes.number.isRequired
}

export default LevelCounter
