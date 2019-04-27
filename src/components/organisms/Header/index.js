import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import Typed from 'typed.js'

const StyledHeader = styled('header')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  color:#333;
  font-family: 'Lato', sans-serif;
  margin: 1em 0;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    align-items: flex-start;
    margin-bottom: 0;
  }
`;

const TitleBlock = styled('div')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
`;

const Title = styled('h1')`
  font-size:2em;
  font-weight: 700;
  font-family: 'Roboto Slab', serif;
  color: #333;
  margin: 0 2vw 0 0;

  span {
    color: #c30;
  }
`;

const Subtitle = styled('div')`
  font-size:1.5em;
  line-height: 1.5em;
  margin-bottom: 0;
`;

const Nav = styled('nav')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 1em;
  }
`;

const NavLink = styled(Link)`
  display: block;
  text-align: center;
  width: 100px;
  color: black;

  &:hover {
    background-color: #c30;
    border-radius: 6px;
    color: white;
  }
`;

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
      <StyledHeader>
        <TitleBlock>
          <Title>&lt;<span>JoanneImlay</span> /&gt;</Title>
          <Subtitle>
            <span
              style={{ whiteSpace: 'pre' }}
              ref={(el) => { this.el = el }}
            />
          </Subtitle>
        </TitleBlock>
        <Nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/portfolio'>Portfolio</NavLink>
        </Nav>
      </StyledHeader>
    )
  }
}

export default Header