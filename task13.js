// Написати функцію capitalizeEverySecondChar,
// яка приймає рядок str і повертає новий рядок,
// у якому кожен другий символ є великим.

function capitalizeEverySecondChar(str) {
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    if (i % 2 === 0) {
      newStr += str[i].toUpperCase();
    } else {
      newStr += str[i].toLowerCase();
    }
  }
  return newStr;
}

// Приклади використання:
console.log(capitalizeEverySecondChar("hello world")); // "hElLo wOrLd"
console.log(capitalizeEverySecondChar("javascript")); // "jAvAsCrIpT"
console.log(capitalizeEverySecondChar("1234567890")); // "1234567890"
