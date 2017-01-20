import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

import Item from './components/Item'

const CertificatesContainer = (props) => (
  <Grid className='section certificates' fluid>
    <Row>
      <Col xs={10} xsOffset={1}>
        <h2>{'Licenses & Certificates'}</h2>
        <Item
          title='Technician License, KK4PDM (FCC)'
          href='http://wireless2.fcc.gov/UlsApp/UlsSearch/license.jsp?licKey=3453318' />
        <Item
          title='Front End Development (Free Code Camp)'
          href='https://www.freecodecamp.com/nateinaction/front-end-certification' />
    	</Col>
    </Row>
  </Grid>
)

export default CertificatesContainer
