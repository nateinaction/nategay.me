import React from 'react'
import PropTypes from 'prop-types';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap'

const Award = (props) => (
  <Col xs={12} md={6} className={'award'}>
    <ListGroup>
      <ListGroupItem>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </ListGroupItem>
    </ListGroup>
	</Col>
)
Award.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Award
