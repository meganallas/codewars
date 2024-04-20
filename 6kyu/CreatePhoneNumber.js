function createPhoneNumber(numbers) {
  const firstSet = numbers.slice(0, 3).join("");
  const secondSet = numbers.slice(3, 6).join("");
  const thirdSet = numbers.slice(6, 10).join("");

  return `(${firstSet}) ${secondSet}-${thirdSet}`;
}