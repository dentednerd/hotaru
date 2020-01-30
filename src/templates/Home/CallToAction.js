import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faLaptopCode, faHistory } from '@fortawesome/free-solid-svg-icons';

const CTAWrapper = styled('div')`
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center; 
`;

const CTASection = styled('section')`
  flex-grow: 1;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  a {
    color: #585273;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-top: 0;
    margin-bottom: 0.5rem;
    letter-spacing: -0.05rem;
    opacity: 0.75;

    &:hover {
      opacity: 1;
      text-decoration: none;
    }

    svg {
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
      margin-bottom: 1rem;
      opacity: 1;
    }
  }
`;

export default () => (
  <CTAWrapper>
    <CTASection>
      <a href="/portfolio">
        <FontAwesomeIcon
          icon={faLaptopCode}
        />
        <br />
        portfolio
      </a>
    </CTASection>
    <CTASection>
      <a href="/experience">
        <FontAwesomeIcon
          icon={faHistory}
        />
        <br />
        experience
      </a>
    </CTASection>
    <CTASection>
      <a href="/journal">
        <FontAwesomeIcon
          icon={faPencilAlt}
        />
        <br />
        journal
      </a>
    </CTASection>
  </CTAWrapper>
);
