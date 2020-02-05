import styled from '@emotion/styled';

const Grid = styled('div')`
  display: flex;
  flex-flow: column nowrap;

  @media (min-width: 1024px) {
    display: grid;
    height: 80vh;
    width: 80vh;
    grid-template-rows: repeat(16, 1fr);
    grid-template-columns: repeat(16, 1fr);
    grid-gap: 1rem;
  }
`;

const Main = styled('a')`
  display: block;
  background-size: cover;
  background-position: center center;
  transition: all .2s ease-in-out;
  box-shadow: 0.1rem 0.1rem 0.25rem #332e4a;
  width: 80vw;
  height: 45vw;
  margin-bottom: 2rem;

  @media (min-width: 1024px) {
    grid-row: span 8;
    grid-column: span 16;
    width: auto;
    height: auto;
    margin-bottom: 0;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0.25rem 0.25rem 0.5rem #332e4a;
  }
`;

const Tall = styled('a')`
  display: block;
  background-size: cover;
  background-position: center center;
  transition: all .2s ease-in-out;
  box-shadow: 0.1rem 0.1rem 0.25rem #332e4a;

  width: 18vh;
  height: 32vh;
  margin: 0 auto 2rem;

  @media (min-width: 1024px) {
    grid-row: span 16;
    grid-column: span 8;
    margin: 0;
  }

  &:hover {
    transform: scale(1.1);
    box-shadow: 0.25rem 0.25rem 0.5rem #332e4a;
  }
`;

const Square = styled('div')`
  display: none;

  @media (min-width: 1024px) {
    grid-row: span 8;
    grid-column: span 8;
    background-size: contain;
    background-position: center center;
  }
`;

const Wide = styled('div')`
  box-shadow: none;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media (min-width: 1024px) {
    grid-row: span 4;
    grid-column: span 8;
    align-items: right;
    text-align: right;
  }

  &:hover {
    transform: scale(1);
  }
`;

export {
  Grid,
  Main,
  Tall,
  Square,
  Wide,
};
