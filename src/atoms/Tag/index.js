import { Link } from 'gatsby';

import './Tag.scss';

const Tag = ({ to, children }) => {
  let tagName = null;
  let tagCount = null;

  if (typeof children === 'object') {
    tagName = children[0];
    tagCount = children[1];
  } else {
    tagName = children;
  }

  return to ? (
    <Link to={to}>
      <div className="tag">
        <div className="flex">
          <div className="pad">{tagName}</div>
          {tagCount && tagCount}
        </div>
      </div>
    </Link>
  ) : (
    <div className="tag">
      <div className="pad">{children}</div>
    </div>
  );
};

export default Tag;
