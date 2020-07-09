import React from 'react';
import styled from '@emotion/styled';

export default (props) => {
  const {
    src, alt,
  } = props;

  const Art = styled('section')`
    position: relative;
    height: calc(((100vw - 2rem) / 16) * 9);
    width: calc(100vw - 2rem);
    background-image: url(${src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: left top;
    background-color: rgba(0,0,0,0);
    padding-bottom: 1rem;
    margin: 0 auto 1rem auto;
    text-shadow: none;
    transition: text-shadow 0.5s ease;

    @media (min-width: 768px) {
      display: none;
    }

    &:hover {
      text-shadow: 1px 1px 3px #ff7dab, -1px -1px 3px #ff7dab;
      transition: text-shadow 0.5s ease;
    }
  `;

  const Caption = styled('section')`
    position: absolute;
    bottom: 0;
    width: calc(100% - 1rem);
    color: #fff;
    text-align: right;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 1.5rem;
    margin-top: 0;
    margin-bottom: 0;
    letter-spacing: -0.05rem;
    padding: 1.5rem 0.5rem 0.25rem;
    background-image: linear-gradient(to top, #332E4A, transparent);

    @media (min-width: 768px) {
      display: none;
    }
  `;

  return (
    <Art>
      <Caption>
        {alt}
      </Caption>
    </Art>
  );
};
