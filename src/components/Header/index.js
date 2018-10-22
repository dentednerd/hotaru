import React from 'react'
import { Link } from 'gatsby'
import Typed from 'typed.js'

import './Header.css'

class Header extends React.Component {
  componentDidMount() {
    const strings = ["React developer.", "UX obsessive.", "Design geek.", "Tutor and resource creator."]

    const options = {
      strings,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      loopCount: Infinity,
    }
    this.typed = new Typed(this.el, options)
  }

  componentWillUnmount() {
    this.typed.destroy()
  }

  render() {
    return (
      <header>
        <div className="title">
          <h1>&lt;<span>JoanneImlay</span> /&gt;</h1>
          <div className="type-wrap">
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el }}
            />
          </div>
        </div>
        <div className="menu">
          <Link to='/'>Home</Link>
          <Link to='/blog/'>Blog</Link>
        </div>
      </header>
    )
  }
}

export default Header