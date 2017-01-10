import React, { PropTypes } from 'react'
import { Col, Image, OverlayTrigger, Tooltip } from 'react-bootstrap'

const tooltip = (message) => (
  <Tooltip id="tooltip">{message}</Tooltip>
);

const Interest = (props) => (
  <Col xs={4} className='vert-pad'>
    <OverlayTrigger placement='bottom' overlay={tooltip(props.description)}>
      <Image src={props.image} />
    </OverlayTrigger>
  </Col>
)
Interest.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default Interest
