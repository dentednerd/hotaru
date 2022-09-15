import React from 'react';
import styled from '@emotion/styled';

const Screenshot = (props) => {
  const { src } = props;

  const StyledScreenshot = styled('section')`
    position: relative;
    width: 50%;
    height: 50%;
    background-image: url(${src});
    background-size: contain;
    background-color: transparent;
    background-repeat: no-repeat;
    background-position: center;
    margin: 2rem auto;
    text-shadow: none;
    transition: text-shadow 0.5s ease;
    overflow: hidden;
  `;

  return <StyledScreenshot />;
};

export default Screenshot;
