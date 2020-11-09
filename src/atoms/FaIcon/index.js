import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { colors } from '../../tokens';

const StyledIcon = styled(FontAwesomeIcon)`
  margin: 0;
  display: inline;
  font-size: 1rem;
  ${props => props.large && `
    font-size: 2rem;
    height: 2rem;
    width: 2rem;
    margin: 0 1rem 0 0;
  `}

  ${props => props.inline && 'display: inline;'}
  color: ${colors.darkpurple};
`;

const FaIcon = (props) => {
  const { icon, onClick } = props;

  return (
    <StyledIcon
      {...props}
      icon={icon}
      onClick={onClick}
      size="3x"
    />
  );
};

export default FaIcon;
