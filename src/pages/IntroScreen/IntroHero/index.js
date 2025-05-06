import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { Remote } from '../../../assets/undraws'
import { greeting } from '../../../helpers'
import { breakpoints } from '../../../tokens'

const string = '-- ' + greeting()

const StyledIntroHero = styled.div`
  position: relative;
  padding: 0;
  width: calc(100vw - 4rem);
  max-width: calc(100vw - 4rem);

  @media (min-width: ${breakpoints['md']}px) {
    width: calc(100vw - 6rem);
    max-width: calc(100vw - 6rem);
  }

  @media (orientation: landscape) {
    width: calc(50vw - 4rem);
    max-width: calc(50vw - 4rem);
  }

  svg {
    align-self: flex-start;
    height: fit-content;

    @media (orientation: landscape) {
      align-self: center;
    }
  }

  &:before {
    position: absolute;
    top: 0;
    left: 60%;
    content: attr(data-before);
    color: ${(props) => props.theme.text};
    z-index: 3;
    transform: rotate(-20deg);
  }
`

const IntroHero = () => {
  const theme = useTheme()
  return (
    <StyledIntroHero theme={theme} data-before={string}>
      <Remote />
    </StyledIntroHero>
  )
}

export default IntroHero
