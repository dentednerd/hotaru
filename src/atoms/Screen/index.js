import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDoubleDown,
  faAngleDoubleUp,
} from '@fortawesome/free-solid-svg-icons';
import IconLinks from '../../molecules/IconLinks';

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
      margin-bottom: 2rem;
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
    margin-top: 25vh;
    height: 50vh;
    width: 100%;
    max-width: 50vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      justify-content: space-between;
      margin-top: 10vh;
      height: 80vh;
      max-height:80vh;
      overflow: hidden;
      max-width: calc(100vw - 2rem);
    }
  `;

  const Footer = styled('footer')`
    text-align: center;
    margin-bottom: 1em;

    svg {
      margin-bottom: 0.25em;
    }

    @media (max-width: 768px) {
      svg {
        margin-bottom: 0.5rem;
      }
    }
  `;

  const Icon = backToTop
    ? (
      <Footer>
        <FontAwesomeIcon
          icon={faAngleDoubleUp}
          onClick={onClick}
        />
        <IconLinks />
      </Footer>
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
