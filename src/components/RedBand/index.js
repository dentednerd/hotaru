import React from 'react'

import './RedBand.css'

const RedBand = props => {
  return (
    <section className="redband">
      {props.children}
    </section>
  )
}

export default RedBand