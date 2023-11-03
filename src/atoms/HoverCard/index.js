import React from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { colors, fonts } from '../../tokens';

const HoverCard = ({ text, image, onClick }) => {
  const theme = useTheme();
  if (!image) return null;

  const StyledHoverCard = styled.section`
    aspect-ratio: 2 / 1;
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    background-image: linear-gradient(
      130deg,
      ${theme.accentLight},
      ${colors.constants.purple}
    );
    background-position: center top;
    background-size: cover;
    background-blend-mode: darken;
    cursor: pointer;

    img {
      display: block;
      width: 100%;
      aspect-ratio: 2/1;
      object-fit: cover;
      mix-blend-mode: luminosity;
    }

    .title {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      backdrop-filter: blur(2px);
      text-align: center;
      padding: 1rem;
      border-radius: 0.5rem;

      span {
        background-image: linear-gradient(
          130deg,
          ${colors.constants.green},
          ${colors.constants.blue}
        );
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

        @media (min-width: 800px) {
          font-size: 1.25rem;
        }
      }
    }

    @media(hover: hover) {
      &:hover {
        cursor: pointer;

        img {
          mix-blend-mode: normal;
        }

        .title {
          backdrop-filter: blur(0.5px);

          span {
            transform: scale(1.2);
            transition: transform 0.2s ease-in-out;
          }
        }
      }
    }
  `;

  return (
    <StyledHoverCard onClick={onClick}>
      <img src={image.images.fallback.src} alt="" />
      <div className="title">
        <span>{text}</span>
      </div>
    </StyledHoverCard>
  );
};

export default HoverCard;
