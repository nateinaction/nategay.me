import React from 'react'
import PropTypes from 'prop-types';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import './Award.css'

const Award = (props) => (
  <Col xs={12} md={6} className={'award'}>
    <ListGroup>
      <ListGroupItem>
        <h3>{props.name}</h3>
        <p className={'metadata'}>{props.organization}; {props.location} — {props.date}</p>
        <p>{props.description}</p>
      </ListGroupItem>
    </ListGroup>
	</Col>
)
Award.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  organization: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Award
