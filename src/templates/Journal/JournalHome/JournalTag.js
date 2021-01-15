import React from 'react';
import kebabCase from 'lodash/kebabCase';
import Tag from '../../../atoms/Tag';

const JournalTag = ({ tag }) => (
  <Tag to={`/tags/${kebabCase(tag.fieldValue)}/`} key={tag.fieldValue}>
    {tag.fieldValue}
    <span>{tag.totalCount}</span>
  </Tag>
);

export default JournalTag;
