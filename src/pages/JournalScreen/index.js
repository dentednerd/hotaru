import styled from '@emotion/styled'
import 'react-multi-carousel/lib/styles.css'
import MixedText from '../../atoms/MixedText'
import JournalEntries from '../../molecules/JournalEntries'
import HomeSection from '../../organisms/HomeSection'

const StyledJournalContent = styled.div`
  padding: 8rem 0;
  display: grid;
  place-items: center;
  grid-template-rows: repeat(2, auto);
  gap: 2rem;

  p {
    text-align: center;
  }
`

const JournalScreen = ({ posts }) => {
  if (!posts) return null
  return (
    <HomeSection>
      <StyledJournalContent>
        <MixedText>
          Sometimes, I write in my <span>journal</span>.
        </MixedText>
        <JournalEntries posts={posts} />
      </StyledJournalContent>
    </HomeSection>
  )
}

export default JournalScreen
