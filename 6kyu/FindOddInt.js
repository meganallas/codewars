function findOdd(arr) {
  const track = {};

  arr.filter((val, idx) => {
    if (track[val] === undefined) {
      track[val] = 1;
    } else {
      track[val] = track[val] + 1;
    }
  });

  const oddKey = Object.keys(track).find((key) => track[key] % 2 > 0);
  
  return Number(oddKey);
}