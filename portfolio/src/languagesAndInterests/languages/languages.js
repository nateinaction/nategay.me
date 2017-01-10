import React, { PropTypes } from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import Lang from './lang'

const Languages = (props) => (
	<Col xs={12} md={5} mdOffset={1}>
    <h2>{'Languages & Libraries'}</h2>
    <ListGroup>
    {props.languages.map((lang, index) => (
      <Lang
        key={index}
        title={lang.title}
        contents={lang.contents}
        style={lang.style} />
    ))}
    </ListGroup>
	</Col>
)
Languages.propTypes = {
	languages: PropTypes.array.isRequired
}

export default Languages
