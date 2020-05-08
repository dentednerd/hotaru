const stackMap = (stack) => {
  return stack.map((tech, index) => {
    if (index === 0) {
      return `${tech}`
    }
    return ` » ${tech} `;
  });
};

const classnames = {
  0: 'lemon',
  1: 'sage',
  2: 'pink',
  3: 'sky',
  4: 'lavender',
};

export {
  stackMap,
  classnames
};