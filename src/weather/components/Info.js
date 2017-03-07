import React from 'react'
import { Col, Button } from 'react-bootstrap'
import Tags from '../../shared/Tags'

const Info = (props) => (
  <Col className='weather-info' xs={12} md={5} mdOffset={1}>
    <h2>Weather</h2>
    <p><strong>{'Weather'}</strong>{' relies on a GraphQL endpoint written with Node.js and exposed with Express. The GraphQL endpoint is deployed using Kubernetes on the Google Cloud Platform. Data is fetched from the Weather Underground REST API.'}</p>
    <div className='text-center'>
      <p>
        <strong>{'Tags: '}</strong>
        <Tags
          tags={['Kubernetes', 'Docker', 'GraphQL', 'Node.js', 'Express', 'React', 'Redux']} />
      </p>
      <Button bsStyle='primary' bsSize='large' href='https://github.com/nateinaction/Local-Weather'>
        View this project on Github
      </Button>
    </div>
  </Col>
)

export default Info
