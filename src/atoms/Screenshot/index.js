import React from 'react';
import styled from '@emotion/styled';

export default (props) => {
  const {
    src, alt, top, light,
  } = props;

  const Screenshot = styled('section')`
    position: relative;
    width: 32vw;
    height: 15.4vw;
    background-image: url(${src});
    background-size: contain;
    background-color: transparent;
    margin: 0 auto 1rem auto;
    text-shadow: none;
    transition: text-shadow 0.5s ease;
    overflow: hidden;

    @media (max-width: 1023px) {
      width: 80vw;
      height: 37vw;
    }

    section {
      position: absolute;
      bottom: -0.5rem;
      right: 0;
      display: inline;
      background-color: #332E4A;
      color: #ff7dab;
      text-shadow: 1px 1px 2px #332E4A;
      text-align: ${top ? 'left' : 'right'};
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 400;
      font-size: 1.5rem;
      height: 1.5rem;
      letter-spacing: -0.05rem;
      padding: 1rem;
      overflow: auto;

      @media (max-width: 1023px) {
        ${top && 'top: 0;'}
        ${top && 'left: 0;'} 
        ${top && 'padding: 1rem 0.25rem;'}
      }
    }
  `;

  return (
    <Screenshot>
      <section>
        <p>
          {alt}
        </p>
      </section>
    </Screenshot>
  );
};
