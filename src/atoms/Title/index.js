import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'

const StyledTitle = styled.h2`
  color: ${(props) => props.theme.bg1};
  background-color: ${(props) => props.theme.text};
  border: double 6px ${(props) => props.theme.bg1};
  padding: 0.5lh;
  width: fit-content;
  margin: 0;
`

const Title = ({ children }) => {
  const theme = useTheme()

  return <StyledTitle theme={theme}>{children}</StyledTitle>
}

export default Title
