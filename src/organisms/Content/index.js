import styled from '@emotion/styled'
import { breakpoints } from '../../tokens'

const Content = styled('section')`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 1fr;
  gap: 1rem;
  place-items: center;
  text-align: left;
  height: fit-content;
  width: calc(100vw - 4rem);
  max-width: ${breakpoints.lg}px;
  padding: 2rem;
  margin: 0;

  @media (orientation: landscape) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, calc(50% - 1rem));
  }

  p,
  svg {
    width: 100%;
  }

  svg:not(.icon) {
    align-self: start !important;
  }
`

export default Content
