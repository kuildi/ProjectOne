import React from 'react'

const Image = (props) => (
    <img
        className="photo photo_rounded"
        src={props.source}
        alt="Photo of me"
    />
)

export default Image
