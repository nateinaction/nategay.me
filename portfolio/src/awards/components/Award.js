import React, { PropTypes } from 'react'
import { Col } from 'react-bootstrap'

const Award = (props) => (
  <Col xs={12} md={6} className={'award'}>
    <h3>{props.name}</h3>
    <p>{props.description}</p>
	</Col>
)
Award.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Award
