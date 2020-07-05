import React from 'react';
import styled from '@emotion/styled';
import FaIcon from '../../atoms/FaIcon';
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';

export default React.forwardRef((props, ref) => {
  const {
    children, className, backToTop, onClick, noIcon, background
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
    width: calc(100% - 8rem);
    height: 100%;
    margin: 4rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    @media (max-width: 767px) {
      margin: 2rem;
      width: calc(100vw - 2rem);
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
