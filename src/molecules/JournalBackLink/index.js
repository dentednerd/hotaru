import React from 'react';
import { Link } from 'gatsby';
import GlowHeading from '../../atoms/GlowHeading';

const JournalBackLink = () => (
  <Link to="/journal">
    <GlowHeading text="&laquo; back to journal" />
  </Link>
);

export default JournalBackLink;
