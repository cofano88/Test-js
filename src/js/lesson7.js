// function maxMinSumm(a, b, c) {
//   let min = 0;
//   let max = 0;
//   if (a < b) {
//     min = a;
//     max = b;
//   } else {
//     max = a;
//     min = b;
//   }
//   if (c > b) {
//     max = c;
//   } else {
//     if (c < a) {
//       min = c;
//     }
//   }
//   let summ = min + max;
//   console.log(summ);
// }

// maxMinSumm(1, 8, 22);

// ----------------------------------------

function findMaxEl(a) {
  let max = 0;
  x = 0;
  y = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] > max) {
        max = a[i][j];
        x = i;
        y = j;
      }
    }
  }
  console.log(max);
  console.log(x);
  console.log(y);
}

let matr = [
  [23, 45, 11],
  [3, 8, 44],
  [95, 23, 3]
];
findMaxEl(matr);
