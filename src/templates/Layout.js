import React from 'react'
import Helmet from 'react-helmet'
import Header from '../organisms/Header'
import Footer from '../organisms/Footer'
import WhiteBand from '../atoms/WhiteBand'

const Layout = (props) => {
  const { children } = props
  return (
    <div id="main">
      <Helmet>
        <title>Joanne Imlay, front end developer</title>
      </Helmet>
      <WhiteBand>
        <Header />
      </WhiteBand>
      {children}
      <WhiteBand>
        <Footer />
      </WhiteBand>
    </div>
  )
}

export default Layout