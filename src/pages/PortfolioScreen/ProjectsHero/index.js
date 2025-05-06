import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { Programmer } from '../../../assets/undraws'
import CTALink from '../../../atoms/CTALink'
import MixedText from '../../../atoms/MixedText'

const StyledProjectsHero = styled('section')`
  position: relative;
  width: 75vw;

  @media (orientation: landscape) {
    width: 45vw;
  }

  p {
    position: absolute;
    top: 8%;
    right: 0;
    text-align: right;
  }

  div {
    position: absolute;
    bottom: 0;
    left: 0;
    width: fit-content;
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;
  }
`

const ProjectsHero = () => {
  const theme = useTheme()

  return (
    <StyledProjectsHero theme={theme}>
      <MixedText>
        <span>Projects</span> I've built
      </MixedText>
      <Programmer />
      <div>
        <CTALink href="https://github.com/dentednerd">GitHub</CTALink>

        <CTALink href="https://codepen.io/dentednerd">Codepen</CTALink>

        <CTALink href="https://www.frontendmentor.io/profile/dentednerd">
          Frontend Mentor
        </CTALink>
      </div>
    </StyledProjectsHero>
  )
}

export default ProjectsHero
