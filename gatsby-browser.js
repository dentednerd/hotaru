require("./src/pages/prism.css")

exports.shouldUpdateScroll = () => {
  window.scrollTo([0, 0]);
  return false;
}
