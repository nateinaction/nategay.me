import React, { PropTypes } from 'react'
import { Label } from 'react-bootstrap'
import './tags.css'

const tagColor = {
  'React': 'danger',
  'Redux': 'warning',
  'Bootstrap': 'info',
  'Wunderground API': 'primary',
  'Node.js': 'success',
  'Express': 'info',
  'PHP': 'warning',
  'WordPress API': 'info',
  'Chrome API': 'success',
  'Firebase': 'danger',
  'jQuery': 'primary'
}

const Tags = (props) => (
  <span className='tags'>
  {props.tags.map((tag, index) => (
    <Label key={index} bsStyle={tagColor[tag]} bsSize='large'>{tag}</Label>
  ))}
  </span>
)
Tags.propTypes = {
  tags: PropTypes.array.isRequired
}

export default Tags
