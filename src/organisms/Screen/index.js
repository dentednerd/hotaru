import React from 'react';
import styled from '@emotion/styled';
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';
import FaIcon from '../../atoms/FaIcon';

export default React.forwardRef((props, ref) => {
  const {
    children,
    className,
    backToTop,
    onClick,
    noIcon,
    background,
    flipped,
  } = props;

  const ScreenWrap = styled('div')`
    label: Screen;
    height: calc(100vh - 6rem);
    width: calc(100vw - 4rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    overflow: hidden;
    position: relative;
    padding: 3rem 2rem;

    ${background && `
      background-image: url(${background});
      background-size: cover;
    `}
    ${background && flipped && `
      -webkit-transform:scaleX(-1);
      -moz-transform:scaleX(-1);
      -ms-transform:scaleX(-1);
      -o-transform:scaleX(-1);
      transform:scaleX(-1);

      & > * {
        -webkit-transform:scaleX(-1);
        -moz-transform:scaleX(-1);
        -ms-transform:scaleX(-1);
        -o-transform:scaleX(-1);
        transform:scaleX(-1);
      }
    `}
    
    svg {
      margin-bottom: 0.5rem;
      opacity: 0.5;
      transition: opacity 0.5s ease;

      &:hover {
        opacity: 1;
        transition: opacity 0.5s ease;
        cursor: pointer;
      }
    }

    @media(max-width: 767px) {
      background-image: none;
      padding: 1rem;
      height: calc(100vh - 2rem);
      width: calc(100vw - 2rem);
    }
  `;

  const ScreenFooter = styled.section`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: center;

    svg {
      height: 2rem;
      width: 2rem;
    }

    @media (max-width: 767px) {
      display: none;
    }
  `;

  const Icon = backToTop
    ? (
      <FaIcon
        icon={faAngleDoubleUp}
        onClick={onClick}
      />
    ) : (
      <FaIcon
        icon={faAngleDoubleDown}
        onClick={onClick}
      />
    );

  return (
    <ScreenWrap className={className} ref={ref}>
      {children}
      <ScreenFooter>
        {!noIcon && Icon}
      </ScreenFooter>
    </ScreenWrap>
  );
});
