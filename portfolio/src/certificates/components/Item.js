import React, { PropTypes } from 'react'
import { Col, ListGroup, ListGroupItem, Button } from 'react-bootstrap'

const Item = (props) => (
  <Col xs={12} md={6}>
    <ListGroup>
      <ListGroupItem className='text-center'>
        <h3>{props.title}</h3>
        <Button
          href={props.href}
          bsStyle='primary'
          bsSize='large'>
          Click to Verify
        </Button>
      </ListGroupItem>
    </ListGroup>
  </Col>
)
Item.propTypes = {
	title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired
}

export default Item
