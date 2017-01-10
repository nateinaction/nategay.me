import React, { PropTypes } from 'react'
import { ListGroupItem } from 'react-bootstrap'

const Lang = (props) => (
  <ListGroupItem
    header={props.title}
    bsStyle={props.style}>
    {props.contents.map((item, index) => {
      if (index < props.contents.length - 1) {
        return item + ', '
      }
      return item
    })}
  </ListGroupItem>
)
Lang.propTypes = {
	title: PropTypes.string.isRequired,
  contents: PropTypes.array.isRequired,
  style: PropTypes.string.isRequired
}

export default Lang
