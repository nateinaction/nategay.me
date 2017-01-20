import React from 'react'
import { Col, Button } from 'react-bootstrap'
import Tags from '../../shared/Tags'

const SimonInfo = (props) => (
  <Col className='simon-info' xs={12} md={5} mdOffset={1}>
    <h2>Simon</h2>
    <p><strong>{'Simon'}</strong>{' skillfully manages timing to prevent excessive calls to the application state object. The result is a responsive game interface with timed button lighting and sequence playback. It is built with React, Redux and uses howler.js for cross-platform web audio with HTML5 audio fallback.'}</p>
    <div className='text-center'>
      <p>
        <strong>{'Tags: '}</strong>
        <Tags
          tags={['React', 'Redux', 'Bootstrap']} />
      </p>
      <Button bsStyle='primary' bsSize='large' href='https://github.com/nateinaction/Simon-Game'>
        View this project on Github
      </Button>
    </div>
  </Col>
)

export default SimonInfo
