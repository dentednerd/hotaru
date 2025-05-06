import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { Chevron } from '../../assets/icons'
import CTALink from '../../atoms/CTALink'
import MixedText from '../../atoms/MixedText'
import talksData from '../../data/talksData'
import HomeSection from '../../organisms/HomeSection'
import { colors, fonts, sizes } from '../../tokens'

const MediaContent = styled.div`
  padding: 8rem 0;
  display: grid;
  place-items: center;

  > p {
    text-align: center;
  }
`

const StyledAccordion = styled.details`
  width: calc(100vw - 4rem);
  cursor: pointer;
  padding: 1rem;
  text-align: left;

  @media (orientation: landscape) {
    width: 50vw;
  }

  div.content {
    padding: 1rem;
    background-color: ${(props) => props.theme.bgContrast};

    div.links {
      display: flex;
      flex-flow: row wrap;
      gap: 1rem;
    }
  }

  &[open] summary svg {
    transform: scale(-1);
  }

  summary {
    list-style: none;
    width: 100%;
    display: block;
    font-family: ${fonts.headline};
    font-size: ${sizes.lg};
    transition: color 400ms ease-in-out;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(
        130deg,
        ${(props) => props.theme.accentLight},
        ${(props) => props.theme.accentBold}
      ),
      linear-gradient(
        130deg,
        ${colors.constants.pink},
        ${colors.constants.yellow},
        ${colors.constants.green},
        ${colors.constants.blue},
        ${colors.constants.purple}
      );
    background-size: 100% 0.125rem, 0 0.125rem;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;

    &:hover {
      color: ${(props) => props.theme.accentBold};
      background-size: 0 0.125rem, 100% 0.125rem;
      transition: all 0.2s ease-in-out;
    }

    &::-webkit-details-marker {
      display: none;
    }
  }
`

const MediaScreen = () => {
  const theme = useTheme()
  return (
    <HomeSection>
      <MediaContent>
        <MixedText>
          I've done a few <span>talks</span> and <span>articles</span> here and there.
        </MixedText>
        <div style={{ alignSelf: 'start', marginTop: '4rem' }}>
          {talksData.map((talk) => (
            <StyledAccordion theme={theme} name="name" key={talk.name}>
              <summary>
                {talk.name} <Chevron />
              </summary>
              <div className="content">
                <p>{talk.description}</p>
                <div className="links">
                  {talk.links.map((link) => (
                    <CTALink key={link.name} href={link.url}>
                      {link.name}
                    </CTALink>
                  ))}
                </div>
              </div>
            </StyledAccordion>
          ))}
        </div>
      </MediaContent>
    </HomeSection>
  )
}

export default MediaScreen
