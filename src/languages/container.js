import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-bootstrap'
import './container.css'

import Lang from './components/Lang'
import actions from './actions'

const Languages = (props) => (
  <Grid className='section languages' fluid>
    <Row>
      <Col xs={12} md={10} mdOffset={1} className='languages'>
        <h2>{'Languages, Libraries & Tools'}</h2>
        {props.languages.map((obj, index) => (
          <Lang
            key={index}
            lang={obj.lang}
            hoverState={obj.hover}
            hover={props.hover} />
        ))}
      </Col>
    </Row>
  </Grid>
)
Languages.propTypes = {
  languages: PropTypes.array.isRequired,
  hover: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	languages: state.languages,
})

const mapDispatchToProps = (dispatch) => ({
	hover: (lang) => (
		dispatch(actions.hover(lang))
	)
})

const LanguagesContainer = connect(
	mapStateToProps,
  mapDispatchToProps
)(Languages)

export default LanguagesContainer
