// 1n
function moveZeros(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === 0) {
      arr.splice(arr.indexOf(0), 1);
      arr.push(0);
    }
  }
  
  return arr;
}

// 2n
// function moveZeros(arr) {
//   var filtedList = arr.filter((num) => num !== 0);
//   var zeroList = arr.filter((num) => num !== 0);
//   return filtedList.concat(zeroList);
// }