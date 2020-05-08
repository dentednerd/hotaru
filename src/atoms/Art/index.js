import React from 'react';
import styled from '@emotion/styled';

export default (props) => {
  const {
    src, alt, top, light,
  } = props;

  const Art = styled('section')`
    position: relative;
    height: 18vw;
    width: 32vw;
    background-image: url(${src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left top;
    background-color: rgba(0,0,0,0.1);
    padding-bottom: 1rem;
    margin: 0 auto 1rem auto;
    text-shadow: none;
    transition: text-shadow 0.5s ease;

    @media (max-width: 1023px) {
      width: 80vw;
      height: 45vw;
    }

    &:hover {
      text-shadow: 1px 1px 3px #ff7dab, -1px -1px 3px #ff7dab;
      transition: text-shadow 0.5s ease;
    }

    section {
      position: absolute;
      width: calc(100% - 1rem);
      color: ${light ? '#fff' : '#585273'};
      text-align: ${top ? 'left' : 'right'};
      ${top && 'top: 1rem;'}
      ${top && 'left: 1rem;'}      
      ${!top && 'bottom: 0;'}
      ${!top && 'right: 0;'}
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 1.5rem;
      margin-top: 0;
      margin-bottom: 0;
      letter-spacing: -0.05rem;
      padding: 1.5rem 0.5rem 0.25rem;
      ${!top && 'background-image: linear-gradient(to top, #332E4A, transparent);'}

      @media (max-width: 1023px) {
        ${top && 'top: 0;'}
        ${top && 'left: 0;'} 
        ${top && 'padding: 1rem 0.25rem;'}
      }
    }
  `;

  return (
    <Art>
      <section>
        {alt}
      </section>
    </Art>
  );
};
