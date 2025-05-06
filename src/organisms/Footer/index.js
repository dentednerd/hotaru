import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import ContactIcons from '../../molecules/ContactIcons'
import { breakpoints, colors, fonts } from '../../tokens'

const StyledFooter = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 0;
  padding: 1rem;
  color: #ffffff;
  height: 100vh;
  width: calc(100% - 2rem);
  display: grid;
  place-items: center;

  h2 {
    text-fill-color: white;
  }

  div {
    max-width: ${breakpoints.md}px;
    margin: 1rem auto 0;
  }

  div.content {
    padding-top: 1rem;
    border-top: solid 1px ${colors.constants.purple};
  }

  a:link {
    background: none;
  }

  .signature {
    font-family: ${fonts.cursive};
    font-size: 2rem;
    margin: 2rem 0 1rem;
    color: ${colors.text};
    text-align: right;
  }
`

const Footer = () => (
  <StyledFooter>
    <div>
      <ContactIcons />
      <div className="content">
        <h2>Drop me a line!</h2>
        <p>
          I'm not on socials much, so{' '}
          <a href="https://www.linkedin.com/in/joey-imlay-4a7a7056/">
            my LinkedIn is the best way to get in touch
          </a>
          .
        </p>
        <p>
          And hey, if you're looking to do a good deed today, why not consider a
          donation to{' '}
          <a href="https://www.actionforme.org.uk/support-us/donate/">
            Action for ME
          </a>
          ? They fund important research into ME/CFS, long Covid and
          post-infectious disease.{' '}
          <Link to="/posts/the-year-i-stopped">
            It's a cause close to my heart
          </Link>
          .
        </p>
        <p>Stay safe out there!</p>
        <p className="signature">Joey xoxo</p>
      </div>
    </div>
  </StyledFooter>
)

export default Footer
