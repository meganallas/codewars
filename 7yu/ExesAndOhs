function XO(str) {
  const string = str.toLowerCase();
  if (!string.includes("x") && !string.includes("o")) return true;

  let oCount = 0;
  let xCount = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === "o") oCount++;
    else if (string[i] === "x") xCount++;
  }

  if (oCount === xCount) return true;
  else return false;
}