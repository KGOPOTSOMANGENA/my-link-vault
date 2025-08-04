import React from 'react';

type TagListProps = {
  tags: string[];
};

const TagList: React.FC<TagListProps> = ({ tags }) => (
  <small>Tags: {tags.join(', ')}</small>
);

export default TagList;