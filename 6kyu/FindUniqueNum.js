function findUniq(arr) {
  return arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));
}