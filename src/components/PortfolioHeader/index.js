import React from 'react'
import RedBand from '../atoms/RedBand'

const PortfolioHeader = () => {
  return (
    <div className="portfolio-header">
      <RedBand>
        <h2>{"<Portfolio />"}</h2>
      </RedBand>
    </div>
  )
}

export default PortfolioHeader