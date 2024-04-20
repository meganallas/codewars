function largest(n, array) {
  const length = array.length;
  const largestArr = array.sort((a, b) => a - b).slice(length - n, length);
  return largestArr
}