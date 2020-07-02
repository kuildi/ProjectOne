import React from 'react'
import '../Icons/sprite.svg'

const Icon = (props) => (
  <svg className={props.class}>
    <use xlinkHref={`#sprite_${props.name}`} />
  </svg>
)

export default Icon