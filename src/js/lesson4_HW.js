// function evenNumsSumm(a, b) {
//   var summ = 0;
//   if (a < b) {
//     for (var i = a; i < b; i++) {
//       if (i % 2 == 0) {
//         summ += i;
//       }
//       continue;
//     }
//   } else {
//     for (var i = b; i < a; i++) {
//       if (i % 2 == 0) {
//         summ += i;
//       }
//       continue;
//     }
//   }
//   console.log(summ);
// }

// evenNumsSumm(10, 5);

// ----------------------------------------------------------------------------------------------------------------

// function numToFactorial(n) {
//   var f = 1;
//   while (n) {
//     f *= n--;
//   }
//   console.log(f);
// }

// numToFactorial(5);

// ----------------------------------------------------------------------------------------------------------------

function hayesSeq(n) {
  let num = n;
  let count = 0;
  let arr = [];
  arr.push(num);
  do {
    if (num % 2 == 0) {
      num = num / 2;
      arr.push(num);
      count++;
    } else {
      num = num * 3 + 1;
      arr.push(num);
      count++;
    }
  } while (num !== 1);

  // arr.push(num);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[0]) {
      arr[0] = arr[i];
    }
  }
  console.log(count);
  console.log(arr);
  console.log(arr[0]);
}

hayesSeq(9);

// if (num % 2 == 0) {
//   num = num / 2;
//   seq.push(num);
//   count++;
// }
// if (num % 2 !== 0) {
//   num = num * 3 + 1;
//   seq.push(num);
//   count++;
// }
// if (num == 0) {
//   seq.push(num);
//   count++;
//   for (var i = 0; i < seq.length; i++) {
//     if (seq[i] > seq[0]) {
//       seq[0] = seq[i];
//     }
//   }
//   console.log(count);
//   console.log(seq);
//   console.log(seq[0]);
// }
