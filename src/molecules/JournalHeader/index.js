import React from 'react';
import styled from '@emotion/styled';
import GlowHeading from '../../atoms/GlowHeading';

const Header = styled('header')`
  height: 3rem;
  margin-bottom: 2rem;
`;

const JournalHeader = () => (
  <Header>
    <GlowHeading text="journal" />
  </Header>
);

export default JournalHeader;
