import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import MixedText from '../../atoms/MixedText'
import HomeSection from '../../organisms/HomeSection'
import IntroHero from './IntroHero'

const IntroContent = styled('section')`
  width: calc(100vw - 2rem);
  max-width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-template-columns: 1fr;
  gap: 2rem;
  place-items: center;
  text-align: left;

  @media (orientation: landscape) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, calc(50% - 1rem));
  }
`

const IntroScreen = () => {
  const theme = useTheme()

  return (
    <HomeSection>
      <IntroContent>
        <MixedText theme={theme}>
          Hello, I'm <span>Joey</span>. I'm a <span>front end developer</span>{' '}
          living in <span>Manchester, England</span> with experience in{' '}
          <span>accessibility</span>, <span>design systems</span> and{' '}
          <span>Scrum</span>.
        </MixedText>
        <IntroHero />
      </IntroContent>
    </HomeSection>
  )
}

export default IntroScreen
