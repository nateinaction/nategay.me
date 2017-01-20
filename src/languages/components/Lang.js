import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'
import 'animate.css'

const classes = (hover) => (
  (hover) ? 'animated tada' : ''
)

const Lang = (props) => (
  <Col xs={6} md={3}>
    <span
      className={classes(props.hoverState)}
      onMouseEnter={() => props.hover(props.lang)}
      onMouseLeave={() => props.hover(props.lang)}>
      {props.lang}
    </span>
  </Col>
)
Lang.propTypes = {
	lang: PropTypes.string.isRequired,
  hoverState: PropTypes.bool.isRequired,
  hover: PropTypes.func.isRequired
}

export default Lang
