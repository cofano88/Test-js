// let arr = [1, 3, 4, 5, 6, 9];
// let newArr = arr.map(change);
// function change(el, index, arr) {
//   if (index == 0) {
//     return el;
//   } else {
//     if (el % 2 !== 0) {
//       if (arr[index - 1] % 2 == 0) {
//         return arr[index - 1];
//       } else {
//         return el;
//       }
//     } else {
//       return el;
//     }
//   }
// }
// console.log(newArr);

// ----------------------------------------------------

let arr = [-2, 4, -4, -6];
let result = arr.reduce(multiNeg, 1);
function multiNeg(res, curr) {
  if (curr < 0) {
    return res *= curr;
  } else {
    return res;
  }
}
console.log(result);

// ---------------------------------------------------------
