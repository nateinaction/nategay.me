import React from 'react'
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap'
import 'animate.css'

const classes = (hover) => (
  (hover) ? 'animated tada' : ''
)

const Lang = (props) => (
  <Col xs={6} md={4}>
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
