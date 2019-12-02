import React from 'react'
import PropTypes from 'prop-types';
import { NavItem, Glyphicon } from 'react-bootstrap'

const StrictButton = (props) => {
  let difficulty = (props.strict === false) ? 'Normal' : 'Hard'
  return (
    <NavItem onClick={props.handleStrictClick}>
      <Glyphicon glyph='education' /> Difficulty: {difficulty}
    </NavItem>
  )
}
StrictButton.propTypes =  {
	strict: PropTypes.bool.isRequired,
	handleStrictClick: PropTypes.func.isRequired
}

export default StrictButton
