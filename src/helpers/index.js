import React from 'react'
import Tag from '../atoms/Tag'
import dayjs from 'dayjs'
import AdvancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(AdvancedFormat)

const greeting = () => {
  const hour = dayjs().format('HH')
  switch (true) {
    case Number(hour) < 6:
      return 'get some sleep!'
    case Number(hour) < 12:
      return 'morning!'
    case Number(hour) < 17:
      return 'afternoon!'
    default:
      return 'evening!'
  }
}

const stackMap = (stack) => stack.map((tech) => <Tag key={tech}>{tech}</Tag>)

const getProjectImage = (title, images) => {
  if (!images) return
  const imgFilename = `${title.split(' ').join('-').toLowerCase()}.png`
  const projectImage = images.filter(
    (img) =>
      img?.node?.gatsbyImageData?.images?.fallback?.src.split('/')[4] ===
      imgFilename
  )[0]?.node?.gatsbyImageData
  return projectImage
}

const hexToRGBA = (hex, opacity) => {
  const red = parseInt(hex.substring(1, 3), 16)
  const green = parseInt(hex.substring(3, 5), 16)
  const blue = parseInt(hex.substring(5, 7), 16)

  return `rgba(${red}, ${green}, ${blue}, ${opacity})`
}

export { greeting, stackMap, getProjectImage, hexToRGBA }
