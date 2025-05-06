import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import { Codepen, Github, LinkedIn } from '../../assets/icons'

const StyledContactIcons = styled.div`
  display: flex;

  a {
    margin-right: 1rem;

    svg {
      color: #fff;
      height: 2rem;
      width: 2rem;
      transition: color 0.3s ease;

      &:hover {
        color: ${(props) => props.theme.accentBold};
        transition: color 0.3s ease;
      }
    }
  }
`

const icons = [
  {
    link: 'https://www.linkedin.com/in/joey-imlay-4a7a7056/',
    icon: <LinkedIn />,
    alt: 'LinkedIn',
  },
  {
    link: 'https://github.com/dentednerd',
    icon: <Github />,
    alt: 'Github',
  },
  {
    link: 'https://codepen.io/dentednerd',
    icon: <Codepen />,
    alt: 'Codepen',
  },
]

const ContactIcons = () => {
  const theme = useTheme()

  return (
    <StyledContactIcons theme={theme}>
      {icons.map((icon) => (
        <a
          href={icon.link}
          key={icon.link}
          aria-label={`Visit my ${icon.alt} profile`}
        >
          {icon.icon}
        </a>
      ))}
    </StyledContactIcons>
  )
}

export default ContactIcons
