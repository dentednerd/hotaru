import styled from '@emotion/styled'
import { breakpoints, colors, fonts } from '../../tokens'

const StyledMixedText = styled.p`
  width: 100%;
  max-width: 100%;
  font-size: 1.75rem;
  line-height: 1.2;
  font-family: ${fonts.contrast};
  text-align: left;
  margin: 0;
  align-self: end;

  @media (orientation: landscape) {
    align-self: center;
  }

  @media (min-width: ${breakpoints['md']}px) and (orientation: portrait) {
    font-size: 3rem;
  }

  span {
    text-decoration: underline;
    font-family: ${fonts.headline};
    font-size: 2rem;
    font-style: normal;
    font-weight: bold;
    color: ${(props) => props.theme.accentBold};
    background-attachment: fixed;
    background-clip: text;
    -webkit-background-clip: text;
    background-color: transparent;
    background-image: linear-gradient(
      to bottom,
      ${colors.constants.blue},
      ${colors.constants.purple},
      ${(props) => props.theme.accentBold} 60%,
      ${(props) => props.theme.accentBold} 100%
    );
    background-origin: padding-box;
    background-repeat: repeat;
    background-size: auto;
    text-fill-color: transparent;
    -webkit-text-fill-color: transparent;

    @supports (-moz-appearance: none) {
      background: none;
      text-fill-color: ${(props) => props.theme.accentBold};
      text-decoration: none;
    }

    @media (min-width: ${breakpoints['md']}px) and (orientation: portrait) {
      font-size: 3.25rem;
    }
  }
`

const MixedText = ({ children }) => {
  return <StyledMixedText>{children}</StyledMixedText>
}

export default MixedText
