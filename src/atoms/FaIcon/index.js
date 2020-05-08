import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const FaIcon = ({ icon, inline, onClick }) => {
  const StyledIcon = styled(FontAwesomeIcon)`
    ${inline && 'display: inline;'}
    ${inline && 'margin-right: 1rem;'}
    ${inline && 'min-width: 1rem;'}
    ${inline && 'max-width: 1rem;'}

    svg {
      {inline && 'width: 1rem;'}
    }
  `;

  return (
    <StyledIcon
      icon={icon}
      onClick={onClick}
    />
  )
};

export default FaIcon;
