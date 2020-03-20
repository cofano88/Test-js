// function zerosOfFactorialEnd(n) {
//   var f = 1;
//   while (n) {
//     f *= n--;
//   }

//   var s = f.toString();
//   var l = s.length;
//   var count = 0;
//   for (let i = l - 1; i >= 0; i--) {
//     if (s[i] == 0) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(zerosOfFactorialEnd(10));

// function numToFactorial(n) {
//   var f = 1;
//   while (n) {
//     f *= n--;
//   }
//   return f;
// }

function numToDobleFactorial(n) {
  var f = 1;
  while (n) {
    f *= n;
    n -= 2;
  }
  return f;
}

function zerosOfNumEnd(n) {
  var s = n.toString();
  var l = s.length;
  var count = 0;
  for (let i = l - 1; i >= 0; i--) {
    if (s[i] == 0) {
      count++;
    }
  }
  return count;
}

function parth(s) {
  var arg = 0;
  var num = 0;
  var l = s.length;
  var fCount = 0;
  for (let i = 0; i < l; i++) {
    var n = s[i];
    if (n >= 0 && n <= 9) {
      arg += n;
      continue;
    }
    if (n === "!") {
      if (fCount == 1) {
        num += numToDobleFactorial(+arg);
      } else {
        continue;
      }
    }
  }
}

console.log(zerosOfNumEnd(1250000));
