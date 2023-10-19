import React from 'react';
import Tag from '../atoms/Tag';

const stackMap = stack => stack.map(tech => <Tag key={tech}>{tech}</Tag>);

const getProjectImage = (project, images) => {
  const imgFilename = `${project.title.split(" ").join("")}.png`;
  const projectImage = images.filter(img => img?.node?.gatsbyImageData?.images?.fallback?.src.split("/")[4] === imgFilename)[0]?.node?.gatsbyImageData;
  return projectImage;
};

const hexToRGBA = (hex, opacity) => {
  const red = parseInt(hex.substring(1, 3), 16);
  const green = parseInt(hex.substring(3, 5), 16);
  const blue = parseInt(hex.substring(5, 7), 16);

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`;
};

export {
  stackMap,
  getProjectImage,
  hexToRGBA
};
