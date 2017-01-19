import React, { PropTypes } from 'react'
import { Col, ListGroup, ListGroupItem } from 'react-bootstrap'

const Item = (props) => (
  <Col xs={12} md={6} className={'award'}>
    <ListGroup>
      <ListGroupItem>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
      </ListGroupItem>
    </ListGroup>
	</Col>
)
Item.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Item
