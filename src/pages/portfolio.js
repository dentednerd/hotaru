import React from "react"
import WhiteProject from '../molecules/WhiteProject'
import RedProject from '../molecules/RedProject'
import PortfolioHeader from '../molecules/PortfolioHeader'
import Layout from '../templates/Layout'
import portfolioData from '../templates/Portfolio/portfolioData'

const Portfolio = () => {
  return (
    <Layout>
      <PortfolioHeader />
      {portfolioData.map((project, index) => {
        if (index % 2 === 0) {
          return <WhiteProject key={project.title} project={project} />
        }
        return <RedProject key={project.title} project={project} />
      })}
    </Layout>

  )
}

export default Portfolio
