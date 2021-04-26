import React from 'react'
import styled from '@emotion/styled'

export default props => {
  const { src } = props

  const Screenshot = styled('section')`
    position: relative;
    // width: 40vw;
    // height: 22.5vw;
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

    // @media (max-width: 767px) {
    //   width: calc(100vw - 2rem);
    //   height: calc(((100vw - 2rem) / 16) * 9);
    // }
  `

  return <Screenshot />
}
