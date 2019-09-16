import React from 'react';
import styled from '@emotion/styled';

export default (props) => {
  const { bgImage, children } = props;
  const ProjectWrap = styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      height: 50vh;
      margin-top: 12.5vh;
    }
  `;

  const Project = styled('div')`
    width: 50vw;
    min-height: 50vh;
    background: url(${bgImage});
    background-size: cover;
    padding: 0;
    position: relative;
    overflow: hidden;

    @media (max-width: 768px) {
      width: calc(100vw - 6vh);
      min-height: calc((100vw - 10vh) * 0.5625);
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center center;
    }

    :hover div {
      top: 0;
      bottom: 0;
      opacity: 1;
      transition: 1s ease;
    }
  `;

  const BlurbHover = styled('div')`
    position: absolute;
    top: -100%;
    bottom: 100%;
    text-align: center;
    width: calc(100% - 24vh);
    margin: 8vh;
    padding: 4vh;
    background: #fffacd;
    opacity: 0;
    transition: 1s ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const BlurbMobile = styled('div')`
    margin: 0 0 2vh 0;
    padding: 2vh;
    background: #fffacd;
    display: none;

    h2 {
      font-size: 1rem;
      line-height: 1rem;
      margin-bottom: 0.25rem;
    }

    p {
      font-size: 0.8rem;
      line-height: 0.8rem;
      margin-bottom: 0.1rem;
    }

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
    }
  `;

  return (
    <ProjectWrap>
      <Project>
        <BlurbHover>
          {children}
        </BlurbHover>
      </Project>
      <BlurbMobile>
        {children}
      </BlurbMobile>
    </ProjectWrap>
  );
};
