import styled from '@emotion/styled';

const Grid = styled('div')`
  display: grid;
  height: 80vh;
  width: 80vh;
  grid-template-rows: repeat(16, 1fr);
  grid-template-columns: repeat(16, 1fr);
  grid-gap: 1rem;
`;

const Main = styled('a')`
  display: block;
  grid-row: span 8;
  grid-column: span 16;
  background-size: cover;
  background-position: center center;
  transition: all .2s ease-in-out;
  box-shadow: 0.1rem 0.1rem 0.25rem #332e4a;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0.25rem 0.25rem 0.5rem #332e4a;
  }
`;

const Tall = styled('a')`
  display: block;
  grid-row: span 16;
  grid-column: span 8;
  background-size: cover;
  background-position: center center;
  transition: all .2s ease-in-out;
  box-shadow: 0.1rem 0.1rem 0.25rem #332e4a;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0.25rem 0.25rem 0.5rem #332e4a;
  }
`;

const Square = styled('div')`
  grid-row: span 8;
  grid-column: span 8;
  background-size: contain;
  background-position: center center;
`;

const Wide = styled('div')`
  grid-row: span 4;
  grid-column: span 8;
  box-shadow: none;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: right;
  text-align: right;

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
