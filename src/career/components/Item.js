import React from 'react'
import PropTypes from 'prop-types';
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap'

const Item = (props) => (
  <Col xs={12} md={6} className={'job'}>
    <ListGroup>
      <ListGroupItem>
        <h3>{props.name}</h3>
        <p className='text-center'>{props.dates}</p>
        <p>{props.description}</p>
      </ListGroupItem>
    </ListGroup>
	</Col>
)
Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired
}

export default Item
