import styled from '@emotion/styled'
import FaIcon from '../atoms/FaIcon'

import {
  faCodepen,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons/faYoutube'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons/faArrowRotateLeft'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown'
import { faHistory } from '@fortawesome/free-solid-svg-icons/faHistory'
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons/faLaptopCode'
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon'
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons/faPencilAlt'
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun'
import { sizes } from '../tokens'

const StyledToggle = styled(FaIcon)`
  height: ${sizes.xl};
  width: ${sizes.xl};
  cursor: pointer;
  color: ${(props) => props.theme.text};
  transition: all 0.2s ease-in-out;
  filter: drop-shadow(-2px 2px 2px ${(props) => props.theme.accentLight});

  &:hover {
    transform: scale(1.25);
    color: ${(props) => props.theme.accentBold};
    transition: all 0.2s ease-in-out;
  }
`

const ToggleIcon = ({ darkMode, theme, onClick }) => (
  <StyledToggle
    theme={theme}
    icon={darkMode?.value ? faSun : faMoon}
    size="3x"
    onClick={onClick}
  />
)

const Chevron = () => <FaIcon icon={faChevronDown} />
const ExtLink = () => <FaIcon icon={faExternalLinkAlt} />
const LinkedIn = () => <FaIcon icon={faLinkedin} />
const Github = () => <FaIcon icon={faGithub} />
const Codepen = () => <FaIcon icon={faCodepen} />
const Laptop = () => <FaIcon icon={faLaptopCode} />
const History = () => <FaIcon icon={faHistory} />
const Pencil = () => <FaIcon icon={faPencilAlt} />
const Youtube = () => <FaIcon icon={faYoutube} />
const RotateLeft = () => <FaIcon icon={faArrowRotateLeft} />

export {
  Chevron, Codepen, ExtLink, Github, History, Laptop, LinkedIn, Pencil, RotateLeft, ToggleIcon, Youtube
}

