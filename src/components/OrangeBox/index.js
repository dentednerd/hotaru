import React from 'react'
import './OrangeBox.css'

const OrangeBox = props => {
  return (
    <div className="orange-box">
      {props.children}
    </div>
  )
}

export default OrangeBox