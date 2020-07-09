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
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    
    overflow: hidden;
    position: relative;
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
    }
  `;

  const Content = styled('div')`
    width: 100%;
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 767px) {
      padding: 0 2rem;
      width: 100%;
      overflow: hidden;
    }
  `;

  const ScreenFooter = styled.section`
    position: absolute;
    bottom: 0;
    left: 4rem;
    width: calc(100% - 8rem);
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
      <Content>
        {children}
      </Content>
      <ScreenFooter>
        {!noIcon && Icon}
      </ScreenFooter>
    </ScreenWrap>
  );
});
