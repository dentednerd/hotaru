import React from 'react'
import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import CTALink from '../../atoms/CTALink'
import FaIcon from '../../atoms/FaIcon'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { breakpoints, colors, fonts, sizes } from '../../tokens'

const StyledItem = styled('div')`
  height: 3lh;

  button.toggle {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    height: min-content;
    width: 100%;
    max-width: ${breakpoints.md}px;
    font-family: ${fonts.body};
    background: transparent;
    padding: 0.5lh 0;
    margin: 0 auto;
    text-align: left;
    color: ${(props) => props.theme.text};
    transition: color 0.4s ease-in-out;
    border: none;
    border-bottom: solid 1px ${(props) => props.theme.bgContrast};

    h3 {
      margin-bottom: 0;
      pointer-events: none;
      font-size: 2vmin;
    }

    svg {
      height: 2vmin;
      width: 2vmin;
      padding: 0 1rem;
      aspect-ratio: 1;
      /* transition: transform 0.2s ease-in-out; */
      pointer-events: none;
    }

    &:focus {
      border: none;
      border-bottom: solid 1px ${(props) => props.theme.bgContrast};
      outline: none;
    }

    &:hover {
      color: ${(props) => props.theme.accentBold};
      background-size: 0 0.125rem, 100% 0.125rem;
      transition: all 0.2s ease-in-out;
      cursor: pointer;
    }
  }

  .content {
    max-height: 0;
    padding: 0;
    background-color: ${(props) => props.theme.bgContrast};
    color: ${colors.constants.ctaText};
    font-size: ${sizes.md};
    line-height: 1.25;
    max-width: calc(${breakpoints.md}px - 2lh);

    div.links {
      display: flex;
      flex-flow: row wrap;
      gap: 0.5lh;
      margin-bottom: 1lh;
    }
  }

  &.open {
    height: fit-content;

    button.toggle {
      font-weight: 700;

      h3 {
        color: ${(props) => props.theme.accentBold};
      }

      svg {
        transform: scaleY(-1);
        transition: transform 0.2s ease-in-out;
      }
    }

    .content {
      height: fit-content;
      padding: 1rem;
      margin-bottom: 1lh;
      /* transform: scaleY(1);
      transform-origin: center top;
      transition: all 0.4s ease-in-out; */
    }
  }
`

const toggleOpen = (e) => {
  const thisItem = e.target.parentNode
  thisItem.classList.toggle('open')

  const siblings = [...thisItem.parentNode.childNodes].filter(
    (node) => node !== thisItem
  )
  siblings.forEach((node) => node.classList.remove('open'))
}

const AccordionItem = ({ talk }) => {
  const theme = useTheme()

  return (
    <StyledItem theme={theme}>
      <button className="toggle" onClick={(e) => toggleOpen(e)}>
        <h3>{talk.name}</h3>
        <FaIcon icon={faChevronDown} />
      </button>

      <div className="content">
        <p className="description">{talk.description}</p>

        <div className="links">
          {talk.links?.map((link) => (
            <CTALink key={link.name} href={link.url}>
              {link.name}
            </CTALink>
          ))}
        </div>
      </div>
    </StyledItem>
  )
}

export default AccordionItem
