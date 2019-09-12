import React from 'react';
import styled from '@emotion/styled';
import { colors } from '../../config.json';
import Image from '../assets/image.svg';

const SecondHome = (props) => {
  const Container = styled('div')`
    background: ${props.bgColor};
    height: 100vh;
    width: 100vw;
    max-width: 100%;
    padding: 25vh 0 0 25vw;
  `;

  const Content = styled('div')`
    label: Content;
    background: transparent;
    height: 50vh;
    width: 50vw;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: flex-start;
  `;

  const Heading = styled('h2')`
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 400;
    color: ${props.textColor};
  `;

  const Half = styled('div')`
    width: 50%;
    padding: 1em;
  `;

  const Art = styled('img')`
    max-width: 100%;
    background-color: ${colors.sage};
  `;
  
  return (
    <Container>
      <Content>
        <Half>
          <Art src={Image} alt="hello" />
        </Half>
        <Half>
          <Heading>Hello. I'm Joey.</Heading>
          I'm a web developer in Manchester, England.
        </Half>
      </Content>
    </Container>
  );
};

export default SecondHome;
