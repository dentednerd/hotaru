import styled from '@emotion/styled'
import { useTheme } from '@emotion/react'
import HomeSection from '../../organisms/HomeSection'
import Content from '../../organisms/Content'
import ContactIcons from '../../molecules/ContactIcons'
import { colors } from '../../tokens'

const OutroSection = styled(HomeSection)`
  background-color: ${colors.constants.darkPurple} !important;
  color: white;

  .content h2 {
    color: ${(props) => props.theme.accentBold};
  }
`

const OutroScreen = () => {
  const theme = useTheme()

  return (
    <OutroSection theme={theme}>
      <Content>
        <ContactIcons />
        <div className="content">
          <h2>joeyimlay.dev</h2>
          <p>PARAGRAPH</p>
        </div>
      </Content>
    </OutroSection>
  )
}

export default OutroScreen
