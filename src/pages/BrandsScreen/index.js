import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { ACN, AWZ, EDF, JLR, LAD, NC } from '../../assets/logos'
import MixedText from '../../atoms/MixedText'
import HomeSection from '../../organisms/HomeSection'
import { breakpoints } from '../../tokens'

const BrandsScreen = () => {
  const theme = useTheme()

  const BrandsGrid = styled.div`
    display: grid;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 1rem;
    padding: 8rem 0;

    @media (orientation: landscape) {
      grid-template-rows: repeat(3, auto);
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    p {
      text-align: center;
      margin: 0 1rem;
      order: 7;
      grid-column: 1/3;

      @media (orientation: landscape) {
        order: 3;
        grid-column: 1/4;
      }
    }

    svg {
      width: 40vw;
      transform: scale(1);
      transition: transform 0.3s ease-in-out;

      @media (min-width: ${breakpoints['md']}px) or (orientation: landscape) {
        width: 25vw;
      }

      path,
      polygon {
        transition: fill 0.3s ease-in-out;
      }

      &:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease-in-out;

        path,
        polygon {
          fill: ${theme.accentBold};
          transition: fill 0.3s ease-in-out;
        }
      }
    }
  `

  return (
    <HomeSection>
      <BrandsGrid theme={theme}>
        <a href="https://www.awaze.com/">
          <AWZ />
        </a>
        <a href="https://www.edfenergy.com/">
          <EDF />
        </a>
        <a href="https://www.jaguarlandrover.com/">
          <JLR />
        </a>
        <MixedText>
          I've worked with these <span>brands </span>.
        </MixedText>
        <a href="https://www.accenture.com/">
          <ACN />
        </a>
        <a href="https://www.northcodersgroup.com/">
          <NC />
        </a>
        <a href="https://www.ladbiblegroup.com/">
          <LAD />
        </a>
      </BrandsGrid>
    </HomeSection>
  )
}

export default BrandsScreen
