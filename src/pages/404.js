import React from "react"
import Layout from "../components/Layout"
import OrangeBox from "../components/OrangeBox"
import './style.css'
import './404.css'

export default () => {
  return (
    <div className="center">
      <Layout>
        <OrangeBox>
          <h1>404!!</h1>
          <a href="/"><h2>&laquo; Home</h2></a>
        </OrangeBox>
      </Layout>
    </div>
  )
}
