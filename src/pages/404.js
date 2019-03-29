import React from "react"
import { Link } from "gatsby"
import Layout from "../components/atoms/Layout"
import OrangeBox from "../components/OrangeBox"
import './style.css'
import './404.css'

export default () => {
  return (
    <div className="center">
      <Wrapped>
        <OrangeBox>
          <h1>404!!</h1>
          <Link to="/"><h2>&laquo; Home</h2></Link>
        </OrangeBox>
      </Wrapped>
    </div>
  )
}
