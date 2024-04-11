function digitalRoot(n) {
  let num = n;
  let sum = 0;

  while (num) {
    sum += num % 10;
    console.log("Sum: " + sum);
    num = Math.floor(num / 10);
  }

  if (sum.toString().length > 1) {
    sum = digitalRoot(sum);
  }

  return sum;
}
