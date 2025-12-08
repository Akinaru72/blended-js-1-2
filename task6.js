// Написати функцію removeVowelsFromWords,
//   яка приймає рядок str і повертає новий рядок,
//     у якому з кожного слова видалені всі голосні букви.
// A, E, I, O, U

function removeVowelsFromWords(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i].toLowerCase() !== "a" &&
      str[i].toLowerCase() !== "e" &&
      str[i].toLowerCase() !== "i" &&
      str[i].toLowerCase() !== "o" &&
      str[i].toLowerCase() !== "u"
    ) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeVowelsFromWords("Hello, world!")); // "Hll, wrld!"

console.log(removeVowelsFromWords("JavaScript is awesome!")); // "JvScrpt s wsm!"
console.log(removeVowelsFromWords("Remove vowels from words")); // "Rmv vwls frm wrds"
