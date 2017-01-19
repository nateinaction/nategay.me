import React, { PropTypes } from 'react'
import { Label } from 'react-bootstrap'
import './tags.css'

const tagColor = {
  'react': 'danger',
  'redux': 'warning',
  'bootstrap': 'info',
  'api': 'primary',
  'node.js': 'success',
  'express': 'info'
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
