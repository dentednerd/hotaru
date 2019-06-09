import React from 'react'
import './OrangeBox.css'

const OrangeBox = props => {
  const { children } = props
  return (
    <div className="orange-box">
      {children}
    </div>
  )
}

export default OrangeBox