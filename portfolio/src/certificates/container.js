import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import Cert from './cert'

const Certificates = (props) => (
  <Grid className='section certificates' fluid>
    <Row>
      <Col xs={10} xsOffset={1}>
        <h2>{'Certificates'}</h2>
      </Col>
    </Row>
    <Row>
    	<Col xs={10} xsOffset={1}>
        {props.certificates.map((cert, index) => (
          <Cert
            key={index}
            name={cert.name}
            image={cert.image}
            imageAlt={cert.imageAlt}
            progress={cert.progress}
            verificationUrl={cert.verificationUrl}/>
        ))}
    	</Col>
    </Row>
  </Grid>
)
Certificates.propTypes = {
	certificates: PropTypes.array.isRequired
}

const mapStateToProps = (state) => ({
	certificates: state.certificates
})

const CertificatesContainer = connect(
	mapStateToProps
)(Certificates)

export default CertificatesContainer
