"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spinWords = void 0;
function spinWords(words) {
    var wordsArr = words.split(" ");
    wordsArr.forEach(function (word, idx) {
        if (word.length > 4) {
            var wordSplit = word.split("");
            var reversed = wordSplit.reverse();
            var reversedStr = reversed.join("");
            wordsArr[idx] = reversedStr;
        }
    });
    console.log(wordsArr.join(" "));
    return " ";
}
exports.spinWords = spinWords;
spinWords("Hey fellow warriors");
spinWords("This is a test");
spinWords("This is another test");
