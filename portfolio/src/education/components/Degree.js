import React, { PropTypes } from 'react'
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap'

const Degree = (props) => (
  <Col xs={12} md={6} className={'degree'}>
    <ListGroup>
      <ListGroupItem>
        <h3>{props.name}</h3>
        <p className={'text-center'}>{props.description}</p>
      </ListGroupItem>
    </ListGroup>
	</Col>
)
Degree.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Degree
