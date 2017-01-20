import React from 'react'
import { Col ,Thumbnail } from 'react-bootstrap'
import leadershipImage from '../../../public/images/nategay-consulate-volunteering-1.jpg'

const Image = (props) => (
  <Col xs={10} xsOffset={1}>
    <Thumbnail
      src={leadershipImage}
      alt='At a mobile consulate in Monroe, NC'>
      <h3>{'Volunteer Coordinator'}</h3>
      <p className='text-center'>{'2015-2016'}</p>
      <p>{'Served as the Volunteer Coordinator for the Mexican Consulate General in Raleigh, NC. I managed and trained 40 student volunteers in greeting and directing consulate visitors.'}</p>
    </Thumbnail>
  </Col>
)

export default Image