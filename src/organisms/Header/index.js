import { useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import React from 'react'
import DarkToggle from '../../atoms/DarkToggle'

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: fit-content;
  display: flex;
  flex-flow: row-reverse nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  color: ${(props) => props.theme.text};
  padding: 1rem;
  margin-bottom: 1rem;
`

const Header = ({ darkMode }) => {
  const theme = useTheme()

  return (
    <StyledHeader theme={theme}>
      <DarkToggle darkMode={darkMode} />
    </StyledHeader>
  )
}

export default Header
