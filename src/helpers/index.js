import React from 'react';
import Tag from '../atoms/Tag';

const stackMap = stack => stack.map(tech => <Tag key={tech}>{tech}</Tag>);

const getProjectImage = (project, images) => {
  const imgFilename = `${project.title.replace(/ /g, '')}.png`;
  const projectImage = images.filter(img => img?.node?.gatsbyImageData?.images?.fallback?.src.split("/")[4] === imgFilename)[0]?.node?.gatsbyImageData;
  if (imgFilename === "HouseofGames.png") console.log({ imgFilename, projectImage });
  return projectImage;
};

export {
  stackMap,
  getProjectImage
};
