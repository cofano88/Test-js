// function ifPalindrome(string) {
//   if (
//     string ===
//     string
//       .split("")
//       .reverse()
//       .join("")
//   ) {
//     console.log("Palindrome!");
//   } else {
//     console.log("Not a palindrome!");
//   }
// }

// isPalindrome("rotor");

// -----------------------------------------

// function uniqueArray() {
//   var arr = [];
//   for (let i = 0; i < 7; i++) {
//     let a = Math.round(Math.random() * 10);
//     if (arr.includes(a)) continue;
//     arr.push(a);
//   }
//   console.log(arr);
//   arr = arr.sort(function(a, b) {
//     return a - b;
//   });
//   console.log(arr);
// }

// uniqueArray();

// ------------------------------------------------

function toZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toString().replace(0, "zero");
  }
  return arr;
}

let arr = [];
for (let i = 0; i < 10; i++) {
  let a = Math.round(Math.random() * 100);
  arr.push(a);
}
toZero(arr);
console.log(arr);


// --------------------------------------------------------

// Guessing game 

// -Принять от пользователя начальную и конечную точки диапазона
// -Запуск ф-и-генератора массива чисел в пределах диапазона
// -Цикл.Прием возможного числа от пользователя
//   -Запуск ф-и бинарного поиска числа пользователя в массиве
//     -Если есть совпадение то разрав цикла, сообщ в консоль
//     -Если не найдено то сообщ о промахе, переход на новую итерацию цикла
