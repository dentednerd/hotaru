import React from 'react';
import styled from '@emotion/styled';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import {
  faCode,
  faMapMarkerAlt,
  faLaptopCode,
  faHistory,
  faPencilAlt
} from '@fortawesome/free-solid-svg-icons';
import MenuItem from './menuitem';
import IconLinks from '../IconLinks';
import FaIcon from '../../atoms/FaIcon';

const StyledSidebar = styled('section')`
  height: 100%;
  background: #6e6191;
  margin: 0;
  padding: 1rem;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  position: fixed;
  top: 0;
  left: 0;
  width: calc(40% - 2rem);
  z-index: 200;
  box-shadow: 1rem 0px 50px rgba(0,0,0,1);
  transform: translateX(calc(-100% - 50px));
  transition: transform 0.5s;

  &.open {
    transform: translateX(-0%);
  }

  @media(max-width: 1023px) {
    width: calc(100% - 2rem);
  }

  h2 {
    font-weight: 400;
  }

  hr {
    border: solid 0.5px #332E4A;
    margin: 1rem 0;
  }
`;

const SidebarHeader = styled('header')`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 15rem;
  margin: 0 auto;

  p {
    line-height: 24px;
  }

  p, h1 {
    margin-bottom: 0;
    text-align: center;
  }

  a {
    &:hover {
      text-decoration: none;
      h1 {
        text-shadow: 0.2rem 0.2rem 0.5rem #ffb8d0, 
                    -0.2rem 0.2rem 0.5rem #ffb8d0, 
                    0.2rem -0.2rem 0.5rem #ffb8d0, 
                    -0.2rem -0.2rem 0.5rem #ffb8d0;
        transition: text-shadow 0.2s;
      }
    }
  }
`;

const Sidebar = (props) => {
  return (
    <StyledSidebar className={props.open ? 'open' : null}>
      <SidebarHeader>
        <a href="/"><h1>Joanne Imlay</h1></a>
        <p>
          <FaIcon
            icon={faCode}
            inline
          />
          front end developer
        </p>
        <p>
          <FaIcon
            icon={faMapMarkerAlt}
            inline
          />
          Manchester, England
        </p>
      </SidebarHeader>

      <div>
        <hr />
        <IconLinks sidebar />
        <hr />
      </div>

      <div>
        <MenuItem page="portfolio" icon={faLaptopCode} />
        <MenuItem page="experience" icon={faHistory} />
        <MenuItem page="journal" icon={faPencilAlt} />
        <MenuItem page="showreel" icon={faYoutube} />
      </div>
    </StyledSidebar>
  )
};

export default Sidebar;
