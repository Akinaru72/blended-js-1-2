//  Напиши цикл, який пропонує ввести число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не введе число більше 100,
//   або не натисне кнопку "Відміна"

let userNumber = Number(prompt("Input number > 100"));

while (userNumber <= 100 || Number.isNaN(userNumber)) {
  const input = prompt("Incorrect number, try again");

  if (input === null) break;

  userNumber = Number(input);
}

console.log("Your number:", userNumber);
