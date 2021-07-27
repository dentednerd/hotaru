import React from 'react';
import styled from '@emotion/styled';
import ContactIcons from '../../molecules/ContactIcons';
import { colors } from '../../tokens';

const StyledFooter = styled('footer')`
  position: sticky;
  bottom: 0;
  left: 0;
  height: auto;
  padding: 1rem 1rem 2rem;
  color: #ffffff;

  div {
    max-width: 800px;
    margin: 1rem auto 0;
  }

  div.content {
    padding-top: 1rem;
    border-top: solid 1px ${colors.constants.purple};
  }

  h2 {
    font-size: 1.5rem;
  }

  p {
    font-size: 0.75rem;
    line-height: 1rem;
    margin: 0 auto;
  }
`;

const string =
  "\"When people call people nerds, mostly what they're saying is 'you like stuff', which is not a good insult at all.\"";

const Footer = () => (
  <StyledFooter>
    <ContactIcons />
    <div className="content">
      <h2>joeyimlay.dev &copy; 2021</h2>
      <p>
        {string}
        <br />
        -- John Green
      </p>
    </div>
  </StyledFooter>
);

export default Footer;
