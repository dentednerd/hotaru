import styled from '@emotion/styled'
import { breakpoints } from '../../tokens'

const HomeSection = styled.section`
  box-sizing: border-box;
  width: 100vw;
  max-width: 100vw;
  margin: 0;
  padding: 0 1rem;
  scroll-snap-align: start;
  display: grid;
  place-items: center;

  @media (min-width: ${breakpoints['md']}px) {
    padding: 0 2rem;
  }

  &:nth-of-type(odd) {
    background-color: ${(props) => props.theme.bg1};
  }

  &:nth-of-type(even) {
    background-color: ${(props) => props.theme.bg2};
  }
`

export default HomeSection
