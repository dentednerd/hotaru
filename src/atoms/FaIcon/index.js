import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledIcon = styled(FontAwesomeIcon)`
  margin: 0;
  display: block;
  color: inherit;
`;

const FaIcon = (props) => {
  const { icon, onClick } = props;

  return <StyledIcon {...props} icon={icon} onClick={onClick} />;
};

export default FaIcon;
