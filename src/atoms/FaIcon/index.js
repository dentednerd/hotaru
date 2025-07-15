import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './FaIcon.scss';

const FaIcon = props => {
  const { icon, onClick } = props;
  return (
    <FontAwesomeIcon
      className="fa-icon"
      icon={icon}
      onClick={onClick}
      {...props}
    />
  );
};

export default FaIcon;
