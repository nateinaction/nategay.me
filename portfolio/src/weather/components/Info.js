import React from 'react'
import { Col, Button } from 'react-bootstrap'
import Tags from '../../shared/Tags'

const Info = (props) => (
  <Col className='weather-info' xs={12} md={5} mdOffset={1}>
    <h2>Weather</h2>
    <p>{'This weather app was built using Facebook\'s React library and uses Redux for state management. The standalone version has a 4.0 score from CodeClimate. It was built in response to a challenge on Free Code Camp.'}</p>
    <div className='text-center'>
      <p>
        <strong>{'Tags: '}</strong>
        <Tags
          tags={['Node.js', 'Express', 'React', 'Redux']} />
      </p>
      <Button bsStyle='primary' bsSize='large' href='https://github.com/nateinaction/Local-Weather'>
        View this project on Github
      </Button>
    </div>
  </Col>
)

export default Info
