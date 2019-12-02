import React from 'react'
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap'

const Prefix = (props) => {
  if (props.prefix) {
    return props.prefix + ' '
  }
  return null
}

const Postfix = (props) => {
  if (props.postfix) {
    return ' ' + props.postfix
  }
  return null
}

const Stats = (props) => (
  <Col xs={12} md={6} className='text-center'>
    <h1>
      <Prefix prefix={props.prefix} />
      {props.number}
      <Postfix postfix={props.postfix} />
    </h1>
    <p>{props.description}</p>
  </Col>
)
Stats.propTypes = {
  number: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  postfix: PropTypes.string
}

export default Stats
