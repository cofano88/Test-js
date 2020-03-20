// var count = 0;
// while (count <= 10) {
//   console.log(count);
//   count += 2;
// }

// for (let i = 1; i <= 9; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// var count = 0;
// for (let i = 0; i <= 9; i++) {
//   if (count % 2 !== 0) {
//     cound = 0 - count;
//     console.log(cound);
//     count++;
//   } else {
//     console.log(count);
//     count++;
//   }
// }

var pos = 0;
var neg = -9;
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(pos);
    pos++;
  } else {
    console.log(neg);
    neg++;
  }
}
