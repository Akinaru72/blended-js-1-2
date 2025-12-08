// Написати функцію hasUniqueChars,
//     яка приймає рядок str і повертає true,
//     якщо всі символи в рядку унікальні, і false в іншому випадку.

function hasUniqueChars(str) {
  let rest = "";
  for (let i = 0; i < str.length; i++) {
    rest = str.slice(i + 1);
    if (rest.includes(str[i])) {
      return false;
    } else {
    }
  }
  return true;
}

// Приклади використання:
console.log(hasUniqueChars("abcdef")); // true
console.log(hasUniqueChars("hello")); // false
console.log(hasUniqueChars("1234567890")); // true
