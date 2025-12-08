// Написати функцію extractNumber,
// яка приймає рядок str і повертає перше число,
// знайдене в рядку.Якщо число не знайдено,
// функція повинна повертати null.

function extractNumber(str) {
  let stringsNumber = "0123456789";
  let newStr = "";
  let BoolNumber = false;
  for (let i = 0; i < str.length; i++) {
    if (!stringsNumber.includes(str[i])) {
      if (BoolNumber) {
        break;
      }
    } else {
      newStr += str[i];
      BoolNumber = true;
    }
  }
  return newStr || null;
}
// Приклади використання:
console.log(extractNumber("abc123def")); // 123
console.log(extractNumber("no numbers here")); // null
console.log(extractNumber(" 24is the ans12wer")); // 42
