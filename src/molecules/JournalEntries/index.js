import styled from '@emotion/styled'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { colors } from '../../tokens'
import JournalCard from '../JournalCard'

const StyledJournalEntries = styled.div`
  .journal-carousel {
    width: calc(100vw - 4rem - 1px);
    height: fit-content;
    padding-bottom: 1rem;

    li {
      width: 100%;
      margin-bottom: 0;

      p {
        text-align: left;
        padding: 0;
      }
    }

    .react-multiple-carousel__arrow {
      background: ${(props) => props.theme.accentLight};
      height: 1.5rem;
      min-height: 1.5rem;
      width: 1.5rem;
      min-width: 1.5rem;
      padding: 0;
      box-shadow: 0 0 0.5rem ${colors.constants.darkPurple};
      transition: all 0.2s ease;
      border-radius: 4px;
      font-size: 0.5rem;
      transform: scale(1.01);

      &:before {
        color: ${(props) => props.theme.bg1};
        font-size: 0.75rem;
      }

      &:hover {
        background: ${(props) => props.theme.accentBold};
        box-shadow: 0 0 0.25rem ${colors.constants.darkPurple};
        transition: all 0.2s ease;
        transform: scale(1);
      }
    }

    .react-multiple-carousel__arrow--right {
      right: 1.75rem;
    }

    .react-multiple-carousel__arrow--left {
      left: 1rem;
    }
  }
`

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const JournalEntries = ({ posts }) => {
  return (
    <StyledJournalEntries>
      <Carousel
        partialVisible={false}
        responsive={responsive}
        containerClass="journal-carousel"
        infinite
      >
        {posts.edges.map(({ node }) => (
          <JournalCard key={node.fields.slug} post={node} />
        ))}
      </Carousel>
    </StyledJournalEntries>
  )
}

export default JournalEntries
