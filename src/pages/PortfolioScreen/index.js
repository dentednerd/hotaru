import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import HoverCard from '../../atoms/HoverCard'
import { portfolioData } from '../../data'
import { getProjectImage } from '../../helpers'
import HomeSection from '../../organisms/HomeSection'
import { breakpoints, colors, fonts } from '../../tokens'
import ProjectsHero from './ProjectsHero'

const ProjectsLayout = styled('section')`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: 1fr;
  gap: 2rem;
  place-items: center;
  padding: 8rem 0;

  @media (orientation: landscape) {
    grid-template-rows: 1fr;
    grid-template-columns: repeat(2, auto);
  }

  p,
  svg {
    max-width: 100%;
  }

  svg:not(.icon) {
    align-self: start !important;
  }
`

const CarouselWrapper = styled.div`
  position: relative;
  border: solid 8px ${(props) => props.theme.text};
  border-bottom: solid 32px ${(props) => props.theme.text};
  border-radius: 4px;
  width: calc(100vw - 6rem);
  max-width: ${breakpoints.md}px;
  aspect-ratio: 2/1;
  box-shadow: 1px 1px ${colors.constants.purple},
    2px 2px ${colors.constants.purple}, 3px 3px ${colors.constants.purple},
    4px 4px ${colors.constants.purple}, 8px 8px 16px ${colors.constants.purple};

  @media (orientation: landscape) {
    width: calc(45vw - 4rem);
  }

  &:after {
    content: 'Joey';
    display: block;
    position: absolute;
    bottom: -32px;
    width: 100%;
    height: 32px;
    background-color: transparent;
    color: ${(props) => props.theme.bg1};
    display: grid;
    place-items: center;
    font-family: ${fonts.headline};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.25rem;
  }

  .carousel-container {
    width: 100%;
    aspect-ratio: 2/1;

    li {
      margin-bottom: 0;
    }
  }

  .carousel-container::after {
    background-image: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.25) 45%,
      rgba(255, 255, 255, 0.5) 50%,
      transparent 50%,
      transparent
    );
    content: '';
    /* filter: blur(4px); */
    position: absolute;
    top: -0.5rem;
    height: calc(100% - 8px);
    width: calc(100% - 8px);
    pointer-events: none;
  }

  .carousel-dots {
    height: fit-content;

    li {
      margin-bottom: 0;

      button {
        background-color: ${colors.constants.darkPurple};
        border: solid 1px white;
      }

      &.react-multi-carousel-dot--active button {
        background-color: ${colors.constants.blue};
      }
    }
  }
`

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const projectList = Object.keys(portfolioData)

const PortfolioScreen = ({ images }) => {
  const theme = useTheme()

  if (!images) return null

  const { edges } = images
  console.log({ edges })

  return (
    <HomeSection>
      <ProjectsLayout>
        <section>
          <CarouselWrapper theme={theme}>
            <Carousel
              responsive={responsive}
              infinite
              containerClass="carousel-container"
              arrows={false}
              showDots
              dotListClass="carousel-dots"
              autoPlay
              autoPlaySpeed={4000}
            >
              {projectList.map((item) => {
                const project = portfolioData[item]
                const projectImage = getProjectImage(project.title, edges)
                return (
                  <a href={project.links[0].url} key={project.title}>
                    <HoverCard text={project.title} image={projectImage} />
                  </a>
                )
              })}
            </Carousel>
          </CarouselWrapper>
        </section>
        <ProjectsHero />
      </ProjectsLayout>
    </HomeSection>
  )
}

export default PortfolioScreen
