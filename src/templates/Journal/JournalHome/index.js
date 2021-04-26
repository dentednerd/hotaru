import React from 'react'
import styled from '@emotion/styled'
import Categories from './Categories'
import JournalTag from './JournalTag'

const StyledJournalHome = styled('article')`
  section {
    margin: 1rem 0;
  }
`

const JournalHome = React.memo(({ categories, tags }) => {
  const sortedCategories = [...categories].reverse()

  return (
    <StyledJournalHome>
      {sortedCategories.map(cat => (
        <Categories cat={cat} key={cat.fieldValue} />
      ))}
      <section>
        <h2>Tags</h2>
        {tags.map(thisTag => (
          <JournalTag tag={thisTag} />
        ))}
      </section>
    </StyledJournalHome>
  )
})

export default JournalHome
