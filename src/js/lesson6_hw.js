function ifPalindrome(string) {
  if (
    string ===
    string
      .split("")
      .reverse()
      .join("")
  ) {
    console.log("Palindrome!");
  } else {
    console.log("Not a palindrome!");
  }
}

isPalindrome("rotor");

// -----------------------------------------

function uniqueArray() {
  var arr = [];
  for (let i = 0; i < 7; i++) {
    let a = Math.round(Math.random() * 10);
    if (arr.includes(a)) continue;
    arr.push(a);
  }
  console.log(arr);
  arr = arr.sort(function(a, b) {
    return a - b;
  });
  console.log(arr);
}

uniqueArray();

// ------------------------------------------------

// function toZero(arr) {
//   // const tempArr = [...arr]
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].toString().replace(/0/g, "zero");
//   }
//   return arr;
// }

// let arr = new Array(10)
// // let arr = [];
// for (let i = 0; i < arr.length; i++) {
//   let a = Math.round(Math.random() * 100);
//   // arr.push(a);
//   arr[i] = a;
// }
// const result = toZero([...arr]);
// console.log(result);

// --------------------------------------------------------

// Guessing game

// -Принять от пользователя начальную и конечную точки диапазона
// -Запуск ф-и-генератора массива чисел в пределах диапазона
// -Цикл.Прием возможного числа от пользователя
//   -Запуск ф-и бинарного поиска числа пользователя в массиве
//     -Если есть совпадение то разрав цикла, сообщ в консоль
//     -Если не найдено то сообщ о промахе, переход на новую итерацию цикла
