function getCount(str) {
  let count = 0;
  const vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
  };
  for (let i = 0; i < str.length; i++) {
    if (vowels.hasOwnProperty(str.charAt(i))) {
      console.log(count);
      vowels[str.charAt(i)] += 1;
      count = Object.values(vowels).reduce((acc, curr) => acc + curr, 0);
    }
  }
  return count;
}
