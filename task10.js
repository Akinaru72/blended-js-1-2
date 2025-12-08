// Написати функцію countOccurrences, яка приймає два аргументи:
// рядок str і символ char.Функція повинна повертати кількість входжень
// символу char у рядку str.

function countOccurrences(str, char) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      count += 1;
    }
  }
  return count;
}
// Приклади використання:
console.log(countOccurrences("Hello, world!", "o")); // 2
console.log(countOccurrences("JavaScript", "a")); // 2
console.log(countOccurrences("12345", "3")); // 1
