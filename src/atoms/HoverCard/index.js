import styled from '@emotion/styled';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useTheme } from '@emotion/react';
import { fonts, shadows } from '../../tokens';

const HoverCard = ({ text, image, onClick }) => {
  const theme = useTheme();

  const StyledHoverCard = styled.section`
    position: relative;
    border-radius: 0.5rem;
    overflow: hidden;
    transform: scale(1);
    transition: transform 0.2s ease-in-out;

    @media(hover: hover) {
      &:hover {
        transform: scale(1.05);
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
      background-image: linear-gradient(to bottom, transparent, ${theme.background} 100%);
      text-align: center;

      @media(hover: hover) {
        transform: translateY(100%);
        transition: transform 0.3s ease-in-out;
      }

      span {
        background-color: ${theme.background};
        font-family: ${fonts.contrast};
        font-size: 0.875rem;
        color: ${theme.text};
        text-decoration: none;
        border: solid 0.25rem ${theme.text};
        box-shadow: ${shadows.ctaShadow};
        line-height: 1.125rem;
        padding: 0.5rem;
      }
    }
  `;

  return (
    <StyledHoverCard onClick={onClick}>
      <GatsbyImage image={image} alt={text} />
      <div className="title">
        <span>{text}</span>
      </div>
    </StyledHoverCard>
  );
}

export default HoverCard;
