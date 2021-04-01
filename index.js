module.exports = {
  lineHeight,
  lineWidth,
}
function lineHeight(fontSize) {
  return (fontSize * 1.168).toFixed(3);
}
function lineWidth(fontSize) {
  return ((50 * fontSize) / 1.168).toFixed(3);
}
