import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';
import Footer from '../Footer';

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
    margin-top: 1rem;
    width: 100%;
    max-width: 50vw;
    display: flex;
    flex-direction: column;

    @media (max-width: 768px) {
      margin-top: 10vh;
      height: 80vh;
      max-height:80vh;
      overflow: hidden;
      max-width: calc(100vw - 2rem);
    }
  `;

  const Icon = backToTop
    ? (
      <div style={{ textAlign: 'center', marginBottom: '0.5rem' }}>
        <FontAwesomeIcon
          icon={faAngleDoubleUp}
          onClick={onClick}
        />
        <Footer />
      </div>
    ) : (
      <FontAwesomeIcon
        icon={faAngleDoubleDown}
        onClick={onClick}
      />
    );

  return (
    <ScreenWrap className={className} ref={ref}>
      <Content>
        {children}
      </Content>
      {!noIcon && Icon}
    </ScreenWrap>
  );
});
