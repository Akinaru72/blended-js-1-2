// Написати функцію extractBetween, яка приймає три аргументи:
// рядок str, підрядок start і підрядок end.Функція повинна повертати частину рядка
// між першим входженням підрядка start і підрядка end.Якщо один з підрядків не знайдено,
//   функція повинна повертати порожній рядок.

function extractBetween(str, start, end) {
  let indexBegin = str.indexOf(start) + 1;
  let indexEnd = str.indexOf(end);
  return str.includes(start) ? str.slice(indexBegin, indexEnd) : "";
}

// Приклади використання:
console.log(extractBetween("Hello, [world]!", "[", "]")); // "world"
console.log(extractBetween("Hello, [world]!", "{", "}")); // ""
console.log(extractBetween("Hello, {world}!", "{", "}")); // "world"
