// Написати функцію findLongestWord,
//     яка приймає рядок str і повертає найдовше слово в цьому рядку.
// Якщо таких слів кілька, повернути перше знайдене.

function findLongestWord(str) {
  let longName = "";
  let maxLongName = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      longName += str[i];
      if (i === str.length - 1 && longName.length > maxLongName.length) {
        maxLongName = longName;
      }
    } else {
      if (maxLongName.length < longName.length) {
        maxLongName = longName;
        longName = "";
      } else {
        longName = "";
      }
    }
  }
  return maxLongName;
}

// Приклади використання:
console.log(findLongestWord("The quick brown fox jumps over the lazy dog")); // "jumps"
console.log(findLongestWord("JavaScript is awesome")); // "JavaScript"
console.log(findLongestWord("I love coding")); // "coding"
