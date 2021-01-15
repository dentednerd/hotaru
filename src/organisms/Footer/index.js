import React from 'react';
import styled from '@emotion/styled';
import ContactIcons from '../../molecules/ContactIcons';
import { colors } from '../../tokens';

const StyledFooter = styled('footer')`
  height: auto;
  padding: 2rem 0;

  section {
    border-top: solid 1px ${colors.purple};
    padding-top: 1rem;
    margin-top: 1rem;
  }

  h2 {
    font-size: 1rem;
  }

  p {
    font-size: 0.75rem;
    line-height: 1rem;
    margin: 0 auto;
  }
`;

const quote = '"When people call people nerds, mostly what they\'re saying is \'you like stuff\', which is not a good insult at all."';

const Footer = () => (
  <StyledFooter>
    <ContactIcons />
    <section>
      <h2>joeyimlay.dev &copy; 2020</h2>
      <p>
        {quote}
        <br />
        -- John Green
      </p>
    </section>
  </StyledFooter>
);

export default Footer;
