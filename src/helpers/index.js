import React from 'react';
import Tag from '../atoms/Tag';

const stackMap = stack => stack.map(tech => (
  <Tag key={tech}>
    {tech}
  </Tag>
));


export {
  stackMap, // eslint-disable-line
};
