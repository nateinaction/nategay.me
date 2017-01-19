import React from 'react'
import { Col ,Thumbnail } from 'react-bootstrap'
import awardImage from '../../../public/images/nategay-awards.jpg'

const AwardImage = (props) => (
  <Col xs={12} md={6}>
    <Thumbnail
      src={awardImage}
      alt='Deputy Consul, Cynthia Prida Bravo (Left) and Nate Gay (Right)'>
      <h3>{'Valued Service to the Mexican Consulate'}</h3>
      <p>{'In December 2015 and again in May 2016 I was recognized for volunteer service at the Mexican Consulate General in Raleigh, NC. The photo is Deputy Consul, Cynthia Prida Bravo.'}</p>
    </Thumbnail>
  </Col>
)

export default AwardImage
