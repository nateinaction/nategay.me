import React from 'react'
import { Col ,Thumbnail } from 'react-bootstrap'
import interculturalImage from '../../../public/images/travel-map.jpg'

const EducationImage = (props) => (
  <Col xs={12}>
    <Thumbnail
      src={interculturalImage}
      alt='Countries I have visited'>
      <h3>{'"Third Culture Kid"'}</h3>
      <p>{'Third Culture Kid is a term used to describe children who grew up outside of their parent’s native culture. I was born to American parents while my father was stationed in Germany and I lived several years in Saudi Arabia. The majority of my life has been lived inside the United States but I have had the opportunity to visit nearly two dozen nations. I learned from an early age to appreciate unique cultural identities, everything from fasting during Ramadan and calls to prayer, to Spanish siestas, to the beautifully crafted ice sculptures in Russia and Kazakhstan.'}</p>
    </Thumbnail>
  </Col>
)

export default EducationImage
