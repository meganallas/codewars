function duplicateCount(text) {
  const textLower = text.toLowerCase();
  const obj = {};
  let count = 0;

  for (let i = 0; i < textLower.length; i++) {
    obj[textLower[i]] ? (obj[textLower[i]] += 1) : (obj[textLower[i]] = 1);
  }

  Object.values(obj).forEach((val) => {
    val >= 2 && count++;
  });

  return count;
}