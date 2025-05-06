import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import { breakpoints, fonts, shadows } from '../../../tokens'
import { hexToRGBA } from '../../../helpers'

const Hero = ({ image, title }) => {
  const theme = useTheme()

  const StyledHero = styled('header')`
    width: 100vw;
    height: 50vh;
    display: grid;
    place-items: center;
    overflow: hidden;
    background-image: url(${image});
    background-position: center;
    background-size: cover;
    background-blend-mode: multiply;
    backdrop-filter: blur(2px);
    box-shadow: ${shadows.insetHero};

    h1 {
      width: fit-content;
      max-width: ${breakpoints.sm}px;
      padding: 1rem;
      background-color: ${theme.bg1};
      color: ${theme.text};
      font-family: ${fonts.headline};
      font-weight: 900;
      font-size: min(9vmin, 3rem);
      line-height: 1;
      /* box-shadow: 0 0 50vw 25vh ${hexToRGBA(theme.accentLight, 0.75)}; */
    }
  `

  return (
    <StyledHero>
      <h1>{title}</h1>
    </StyledHero>
  )
}

export default Hero
