import React from 'react';
import styled from '@emotion/styled';

export default (props) => {
  const {
    src, alt, top, light,
  } = props;

  const Screenshot = styled('section')`
    position: relative;
    width: 32vw;
    height: 15.5vw;
    background-color: rgba(0,0,0,0.1);
    margin: 0 auto 1rem auto;
    text-shadow: none;
    transition: text-shadow 0.5s ease;
    overflow: hidden;

    @media (max-width: 1023px) {
      width: 80vw;
      height: 37vw;
    }
    
    img {
      width: 32vw;

      @media (max-width: 1023px) {
        width: 80vw;
      }
    }



    &:hover {
      text-shadow: 1px 1px 3px #ff7dab, -1px -1px 3px #ff7dab;
      transition: text-shadow 0.5s ease;
    }

    section {
      position: absolute;
      width: calc(100% - 2rem);
      color: ${light ? '#fff' : '#585273'};
      text-align: ${top ? 'left' : 'right'};
      bottom: 0;
      right: 0;
      font-family: 'Josefin Sans', sans-serif;
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 1.5rem;
      letter-spacing: -0.05rem;
      margin-top: 0;
      margin-bottom: 0;
      padding: 1.5rem 1rem 0.5rem 1rem;
      ${!top && 'background-image: linear-gradient(to top, #7a7495, transparent);'}

      @media (max-width: 1023px) {
        ${top && 'top: 0;'}
        ${top && 'left: 0;'} 
        ${top && 'padding: 1rem 0.25rem;'}
      }
    }
  `;

  return (
    <Screenshot>
      <img src={src} alt={alt} />
      <section>
        {alt}
      </section>
    </Screenshot>
  );
};
