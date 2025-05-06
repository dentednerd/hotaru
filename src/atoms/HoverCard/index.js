import styled from '@emotion/styled'
import React from 'react'
import { breakpoints, colors, fonts, shadows } from '../../tokens'

const HoverCard = ({ text, image, onClick }) => {
  if (!image) return null

  const StyledHoverCard = styled.div`
    aspect-ratio: 2 / 1;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    background-position: center top;
    background-size: cover;
    transition: all 0.2s ease-in-out;

    img {
      display: block;
      width: 100%;
      aspect-ratio: 2/1;
      object-fit: cover;
      mix-blend-mode: luminosity;
    }

    div.blur {
      display: flex;
      flex-flow: row nowrap;
      justify-content: flex-end;
      align-items: flex-end;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      backdrop-filter: blur(0.5px);
      text-align: center;
      padding: 1rem;
      box-shadow: ${shadows.inset};

      span.title {
        background-color: ${colors.constants.blue};
        max-width: 80%;
        font-family: ${fonts.headline};
        font-size: 16px;
        color: ${colors.constants.darkPurple};
        text-decoration: none;
        line-height: 1;
        padding: 0.5rem;
        transform: scale(1);
        transition: transform 0.2s ease-in-out;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 1rem;

        @media (min-width: ${breakpoints.md}px) {
          font-size: 1.25rem;
        }
      }
    }

    &:hover {
      background-color: transparent;
      transition: all 0.2s ease-in-out;

      img {
        mix-blend-mode: normal;
      }

      div.blur {
        backdrop-filter: none;

        span.title {
          transform: scale(1.1);
          transition: transform 0.2s ease-in-out;
        }
      }
    }
  `

  return (
    <StyledHoverCard onClick={onClick}>
      <img src={image.images.fallback.src} alt="" />
      <div className="blur">
        <span className="title">{text}</span>
      </div>
    </StyledHoverCard>
  )
}

export default HoverCard
