import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import FaIcon from '../../atoms/FaIcon';
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';

export default React.forwardRef((props, ref) => {
  const {
    children, className, backToTop, onClick, noIcon,
  } = props;

  const ScreenWrap = styled('div')`
    label: Screen;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;    
    overflow: hidden;
    position: relative;
    
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
  `;

  const Content = styled('div')`
    width: 100%;
    max-width: 50vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      margin-top: 10vh;
      height: 80vh;
      max-height:80vh;
      overflow: hidden;
      max-width: calc(100vw - 2rem);
    }
  `;

  const ScreenFooter = styled.section`
    position: absolute;
    bottom: 0;
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
      <Content>
        {children}
      </Content>
      <ScreenFooter>
        {!noIcon && Icon}
      </ScreenFooter>
    </ScreenWrap>
  );
});
