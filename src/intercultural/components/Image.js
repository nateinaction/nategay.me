import React from 'react'
import { Col ,Thumbnail } from 'react-bootstrap'
import interculturalImage from '../../assets/images/travel-map.jpg'

const EducationImage = (props) => (
  <Col xs={12}>
    <Thumbnail
      src={interculturalImage}
      alt='Countries I have visited'>
      <h3>{'"Third Culture Kid"'}</h3>
      <p>{'Third Culture Kid is a term used to describe children who grew up outside of their parent’s native culture. I was born to American parents while they were living in Germany. I have lived the majority of my life inside the United States but I have had the opportunity to visit two dozen nations and have lived in a few along the way.'}</p>
    </Thumbnail>
  </Col>
)

export default EducationImage
