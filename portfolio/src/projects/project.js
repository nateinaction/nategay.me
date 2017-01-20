import React, { PropTypes } from 'react'
import { Col, Thumbnail, ButtonToolbar, Button } from 'react-bootstrap'
import Tags from '../tags/Tags'

const Project = (props) => (
  <Col xs={12} md={4}>
    <Thumbnail src={props.image} alt={props.name}>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <Tags tags={props.tags} />
      <ButtonToolbar>
        <Button bsStyle='primary' href={props.github}>
          Github
        </Button>
        <Button bsStyle='default' href={props.demo}>
          Demo
        </Button>
      </ButtonToolbar>
    </Thumbnail>
	</Col>
)
Project.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  github: PropTypes.string.isRequired,
  demo: PropTypes.string.isRequired
}

export default Project
