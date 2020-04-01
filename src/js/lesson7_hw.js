function createMatrix(n, m) {
  let arr = new Array();
  for (let i = 0; i < n; i++) {
    arr[i] = new Array();
    for (let j = 0; j < m; j++) {
      arr[i][j] = Math.round(Math.random() * 200) - 100;
    }
  }
  return arr;
}

console.log(createMatrix(5, 5));

// -------------------------------------------------

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

let matrix = [
  [23, 45, 11],
  [3, 8, 44],
  [95, 23, 3]
];
findMaxEl(matrix);

//   ------------------------------------------

function repNegative(a) {
  let max = 0;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] > max) {
        max = a[i][j];
      }
    }
  }
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {
      if (a[i][j] < 0) {
        a[i][j] = max;
      }
    }
  }
  console.log(a);
}

let matrix = [
  [-23, 45, 11],
  [3, 8, -44],
  [95, 23, 3]
];

repNegative(matrix);

// --------------------------------------------------------

function inner(arg1, arg2) {
  return arg1 + arg2;
}

function wrap(func, a, b) {
  return func(a, b);
}

console.log(wrap(inner, 3, 6));
