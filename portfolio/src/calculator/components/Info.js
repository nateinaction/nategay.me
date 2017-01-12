import React from 'react'
import { Col, Button } from 'react-bootstrap'
import Tags from '../../tags/Tags'

const CalculatorInfo = (props) => (
  <Col className='calculator-info' xs={12} md={5} mdOffset={1}>
    <h2>Calculator</h2>
    <p>{'This calculator is a web app built using Facebook\'s React library and uses Redux for state management. The standalone version has a 4.0 score from CodeClimate. It was built in response to a challenge on Free Code Camp.'}</p>
    <div className='text-center'>
      <p>
        <strong>{'Tags: '}</strong>
        <Tags
          tags={['react', 'redux', 'bootstrap']} />
      </p>
      <Button bsStyle='primary' bsSize='large' href='https://github.com/nateinaction/Calculator'>
        View this project on Github
      </Button>
    </div>
  </Col>
)

export default CalculatorInfo