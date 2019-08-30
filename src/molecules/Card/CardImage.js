import React from 'react';
import styled from '@emotion/styled';

const CardImage = (props) => {
  const { imgSrc } = props;

  const ImageDiv = styled('div')`
    background-color: #bbb;
    background-image: url("${imgSrc}");
    background-size: cover;
    background-position: center;
    height: 14em;
    width: 100%;
    margin: 0;
    padding: 0;
  `;

  return <ImageDiv />;
};

export default CardImage;
