import React from 'react'
import { Col, Button } from 'react-bootstrap'
import Tags from '../../shared/Tags'

const Info = (props) => (
  <Col className='weather-info' xs={12} md={5} mdOffset={1}>
    <h2>Weather</h2>
    <p><strong>{'Weather'}</strong>{' relies on an API built with Node.js and Express. The API validates requests and fetches weather data from Weather Underground. To prevent abuse, the API only responds with a valid allow-origin header when calls are made from this portfolio.'}</p>
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
