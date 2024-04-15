function moveZeros(arr) {
    let count = 0;
  
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === 0) {
        arr.splice(arr.indexOf(0), 1);
        count++;
      }
    }
  
    if (count > 0) {
      for (let k = 1; k <= count; k++) {
        arr.push(0);
      }
    }
    
    return arr;
  }