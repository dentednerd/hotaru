import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { colors, fonts } from '../../tokens';
import { hexToRGBA } from '../../helpers';

const HoverCard = ({ text, image, onClick }) => {
  const theme = useTheme();
  if (!image) return null;

  const StyledHoverCard = styled.section`
    aspect-ratio: 2 / 1;
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    transform: scale(1);
    transition: all 0.1s ease-in-out;
    background-image: url(${image.images.fallback.src}), linear-gradient(to bottom right, ${hexToRGBA(theme.accentLight, 0.5)}, ${hexToRGBA(colors.constants.purple, 0.5)});
    background-position: center;
    background-size: cover;
    background-blend-mode: darken;
    cursor: pointer;

    @media(hover: hover) {
      &:hover {
        transform: scale(1.2);
        z-index: 999;
        transition: all 0.3s ease-in-out;
        cursor: pointer;

        .title {
            transform: translateY(0);
            transition: transform 0.3s ease-in-out;
          }
      }
    }

    img {
      display: block;
      width: 100%;
      aspect-ratio: 2/1;
      object-fit: cover;
    }

    .title {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      position: absolute;
      top:0;
      right:0;
      bottom:0;
      left:0;
      /* background-image: linear-gradient(to bottom, transparent, ${theme.background} 100%); */
      backdrop-filter: blur(1px);
      text-align: center;
      padding: 1rem;

      @media(hover: hover) {
        transform: translateY(100%);
        transition: transform 0.3s ease-in-out;
      }

      span {
        background-color: ${theme.accentLight};
        font-family: ${fonts.headline};
        font-size: 1rem;
        color: ${colors.constants.darkPurple};
        text-decoration: none;
        border: solid 0.25rem ${colors.constants.darkPurple};
        line-height: 1;
        padding: 0.5rem;
      }
    }
  `;

  return (
    <StyledHoverCard onClick={onClick}>
      {/* <GatsbyImage image={image} alt={text} /> */}
      <div className="title">
        <span>{text}</span>
      </div>
    </StyledHoverCard>
  );
};

export default HoverCard;
