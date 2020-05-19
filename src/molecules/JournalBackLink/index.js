import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import GlowHeading from '../../atoms/GlowHeading';

const GlowLink = styled(Link)`
  &:hover {
    text-decoration: none;
    
    h1 {
      text-shadow: 0.25rem 0.25rem 0.5rem #ffb8d0,
        -0.25rem 0.25rem 0.5rem #ffb8d0,
        0.25rem -0.25rem 0.5rem #ffb8d0,
        -0.25rem -0.25rem 0.5rem #ffb8d0;
      transition: text-shadow 0.3s;
    }
  }
`;

const JournalBackLink = () => (
  <GlowLink to="/journal">
    <GlowHeading text="&laquo; back to journal" />
  </GlowLink>
);

export default JournalBackLink;
