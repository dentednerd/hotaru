import React from 'react'
import styled from '@emotion/styled'
import portfolioData from '../../data/portfolioData'
import { fonts, colors } from '../../tokens'

const projectList = Object.keys(portfolioData)
const categories = {
  LBG: 'The LADbible Group',
  NC: 'Northcoders',
  JI: 'my own',
}

const StyledMenu = styled.div`
  margin-bottom: 2rem;

  h3 {
    margin-bottom: 0.5rem;
  }

  div.grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;

    @media (min-width: 768px) {
      grid-template-columns: repeat(5, 1fr);
    }

    button {
      background-color: ${colors.backgroundpurple};
      color: ${colors.darkpurple};
      font-family: ${fonts.headline};
      border: solid 1px ${colors.darkpurple};
      font-size: 0.7rem;
    }
  }
`

const Menu = ({ category, setCurrentProject }) => (
  <StyledMenu>
    <h3>
      {categories[category]}
      &nbsp;projects:
    </h3>
    <div className="grid">
      {projectList.map(
        item =>
          portfolioData[item].category === category && (
            <button type="button" onClick={() => setCurrentProject(item)}>
              {portfolioData[item].title}
            </button>
          )
      )}
    </div>
  </StyledMenu>
)

export default Menu
