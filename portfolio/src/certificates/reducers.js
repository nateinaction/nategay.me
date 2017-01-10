import frontEndCertImage from '../../public/images/front-end-cert.jpg'
import dataVizCertImage from '../../public/images/data-viz-cert.jpg'
import backEndCertImage from '../../public/images/back-end-cert.jpg'

/*
 * Redux Default State
 */

const allCertificates = [
  {
    name: 'Front End Develpment',
    progress: 100,
    image: frontEndCertImage,
    imageAlt: 'Click to verify',
    verificationUrl: 'https://www.freecodecamp.com/nateinaction/front-end-certification'
  },
  {
    name: 'Data Visualization',
    progress: 30,
    image: dataVizCertImage,
    imageAlt: 'Coming soon',
    verificationUrl: '#'
  },
  {
    name: 'Back End Develpment',
    progress: 10,
    image: backEndCertImage,
    imageAlt: 'Coming soon',
    verificationUrl: '#'
  }
]

/*
 * Redux Reducer
 */

const certificates = (state = allCertificates, action) => {
  switch(action.type) {
    default:
      return state
  }
}

export default certificates
