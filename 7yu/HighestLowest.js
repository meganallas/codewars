function highAndLow(numbers) {
  const arr = numbers.split(" ");
  return `${Math.max(...arr)} ${Math.min(...arr)}`;
}
