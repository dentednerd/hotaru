import React from "react"
import { Link } from "gatsby"
import WhiteBand from "../components/atoms/WhiteBand"
import OrangeBox from "../components/OrangeBox"
import './style.css'
import './404.css'

export default () => {
  return (
    <div className="center">
      <WhiteBand>
        <OrangeBox>
          <h1>404!!</h1>
          <Link to="/"><h2>&laquo; Home</h2></Link>
        </OrangeBox>
      </WhiteBand>
    </div>
  )
}
