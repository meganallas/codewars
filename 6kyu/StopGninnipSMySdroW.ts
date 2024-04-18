export function spinWords(words: string): string {
  const wordsArr = words.split(" ");

  wordsArr.forEach((word: string, idx: number): void => {
    if (word.length > 4) {
      const wordSplit = word.split("");
      const reversed = wordSplit.reverse();
      const reversedStr = reversed.join("");
      wordsArr[idx] = reversedStr;
    }
  });

  return wordsArr.join(" ");
}

spinWords("Hey fellow warriors");
spinWords("This is a test");
spinWords("This is another test");
