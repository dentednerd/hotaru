import React from 'react';
import styled from '@emotion/styled';

const Heading = styled('h1')`
  display: block;
  font-family: 'Sacramento', cursive;
  font-weight: 300;
  font-size: 3rem;
  line-height: 3rem;
  margin: 24px auto;
  text-align: center;
  color: #fff;
  text-shadow: 0.1rem 0.1rem 0.5rem #ffb8d0,
    -0.1rem 0.1rem 0.5rem #ffb8d0,
    0.1rem -0.1rem 0.5rem #ffb8d0,
    -0.1rem -0.1rem 0.5rem #ffb8d0;
  transition: text-shadow 0.3s;

  @media(max-width: 767px) {
    height: 2rem;
    font-size: 2rem;
    line-height: 2rem;
  }
`;

const GlowHeading = ({ text }) => (
  <Heading>
    {text}
  </Heading>
);

export default GlowHeading;
