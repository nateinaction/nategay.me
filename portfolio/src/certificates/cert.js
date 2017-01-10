import React, { PropTypes } from 'react'
import { Col, Thumbnail, ProgressBar, Tooltip, OverlayTrigger } from 'react-bootstrap'

const tooltip = (message) => (
  <Tooltip id="tooltip"><strong>{message}</strong></Tooltip>
);

const Cert = (props) => (
  <Col xs={12} md={4}>
    <h3>{props.name}</h3>
    <ProgressBar
      now={props.progress}
      label={props.progress + '%'} />
    <OverlayTrigger placement='bottom' overlay={tooltip(props.imageAlt)}>
      <Thumbnail
        alt={props.name}
        title={props.imageAlt}
        src={props.image}
        href={props.verificationUrl} />
    </OverlayTrigger>
  </Col>
)
Cert.propTypes = {
	name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  verificationUrl: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired
}

export default Cert
