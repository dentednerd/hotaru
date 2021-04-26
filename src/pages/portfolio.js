import React from 'react'
import PageIntro from '../atoms/PageIntro'
import Layout from '../templates/Layout'
import PortfolioTemplate from '../templates/Portfolio'

const Portfolio = () => (
  <Layout>
    <PageIntro
      title="Portfolio"
      text="Projects I've built and contributed to."
    />
    <PortfolioTemplate />
  </Layout>
)

export default Portfolio
