import React, { PropTypes } from 'react'
import { Col, Thumbnail, ButtonToolbar, Button } from 'react-bootstrap'
import Tags from '../../shared/Tags'

const Project = (props) => (
  <Col xs={12} md={6}>
    <Thumbnail src={props.image} alt={props.name} />
    <h3>{props.name}</h3>
    <p>{props.description}</p>
    <p className='text-center'>
      <strong>{'Tags: '}</strong>
      <Tags tags={props.tags} />
    </p>
    <ButtonToolbar className='text-center'>
      <Button bsStyle='primary' bsSize='large' href={props.github}>
        Github
      </Button>
      <Button bsStyle='default' bsSize='large' href={props.demo}>
        Demo
      </Button>
    </ButtonToolbar>
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
