import { Link } from 'gatsby';

import { ExtLink } from '../../assets/icons';

import './CTALink.scss';

const CTALink = ({ to, href, onClick, style, children }) => {
  let Element = 'span';
  if (to) Element = Link;
  if (href) Element = 'a';

  return (
    <Element
      className="cta-link"
      to={to || null}
      href={href || null}
      onClick={() => (onClick ? onClick() : null)}
      style={style}
    >
      {href && <ExtLink />}
      {children}
    </Element>
  );
};

export default CTALink;
