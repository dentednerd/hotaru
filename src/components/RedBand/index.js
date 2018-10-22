import React from 'react'

import './RedBand.css'

const RedBand = props => {
  return (
    <div className="redband">
      {props.children}
    </div>
  )
}

export default RedBand