import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt, faLaptopCode, faHistory } from '@fortawesome/free-solid-svg-icons';
import { JapanSvg } from '../../assets';
import Footer from '../../organisms/Footer';

const CTAWrapper = styled('div')`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center; 
  background-color: #fffacd;
  background-image: url(${JapanSvg});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  position: relative;
  
  &:before {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #ffdadd;
    opacity: 0.75;
    content: '';
  }

  @media (max-width: 767px) {
    flex-flow: column nowrap;
    justify-content: center;
    max-height: 75vh;
  }
`;

const CTASection = styled('section')`
  flex-grow: 1;
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  height: 100%;
  width: 100%;

  @media(max-width: 767px) {
    max-height: 15vh;
  }

  &:hover {
    a {
      opacity: 1;
      text-decoration: none;
      color: #fff;
      transition: all 0.5s ease;
    }

    svg {
      color: #fff;
      transition: all 0.5s ease;
    }
  }

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

    @media(max-width: 767px) {
      font-size: 1rem;
      line-height: 1rem;
    }

    svg {
      font-size: 3rem;
      width: 3rem;
      height: 3rem;
      margin-bottom: 1rem;
      opacity: 1;

      @media(max-width: 767px) {
        font-size: 2rem;
        margin-bottom: 0;
      }
    }
  }
`;

export default () => (
  <>
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
    <Footer />
  </>
);
