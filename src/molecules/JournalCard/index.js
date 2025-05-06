import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { colors, shadows, sizes } from '../../tokens'
import JournalCardHero from './JournalCardHero'

const StyledCard = styled(Link)`
  display: block;
  width: calc(100vw - 5rem);
  height: 100%;
  border: solid 1px ${colors.constants.purple};
  background-color: ${colors.constants.white};
  color: ${colors.constants.darkPurple};
  box-shadow: ${shadows.cta};
  transition: box-shadow 0.2s ease-in-out;

  @media (orientation: landscape) {
    width: calc(((100vw - 4rem) / 3) - 1rem);
  }

  &:hover {
    box-shadow: ${shadows.ctaHover};
    transition: box-shadow 0.2s ease-in-out;
  }

  header {
    border-bottom: solid 1px ${colors.constants.purple};
  }

  section {
    padding: 1rem;
  }

  h2 {
    font-size: ${sizes.md};
    text-fill-color: ${colors.constants.purple};
  }
`

const JournalCard = ({ post }) => {
  const thisFeaturedImage = getImage(post.frontmatter.featuredImage)

  const { theme } = useTheme()

  return (
    <StyledCard theme={theme} to={post.fields.slug}>
      <JournalCardHero image={thisFeaturedImage.images.fallback.src} />
      <section>
        <h2>{post.frontmatter.title}</h2>
        <p>{post.excerpt}</p>
      </section>
    </StyledCard>
  )
}

export default JournalCard
