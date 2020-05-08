import React from 'react';
import styled from '@emotion/styled';

const CardImage = (props) => {
  const { imgSrc } = props;

  const ImageDiv = styled('div')`
    background-color: #fffacd;
    background-image: url("${imgSrc}");
    background-size: cover;
    background-position: center;
    height: 80px;
    width: 128px;
    min-width: 128px;
    max-width: 128px;
    margin: 0;
    padding: 0;
  `;

  return <ImageDiv />;
};

export default CardImage;
