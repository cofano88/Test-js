// function show(arg) {
//   console.log(arg);
// }

// show(8);

// ----------------

// const show = arg => console.log(arg);
// show(8);

// -----------------------

// function showMe(arg) {
//   return arg;
// }

// let a = showMe(8);
// console.log(a);

// ---------------------------------
// function isNumEven(num) {
//   return num % 2 == 0;
// }
// function MaxNumInArr(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[0]) {
//       arr[0] = arr[i];
//     }
//   }
//   return arr[0];
// }

// function hayesSeq(n) {
//   let num = n;
//   let count = 0;
//   let arr = [];
//   arr.push(num);
//   do {
//     if (isNumEven(num)) {
//       num = num / 2;
//       arr.push(num);
//       count++;
//     } else {
//       num = num * 3 + 1;
//       arr.push(num);
//       count++;
//     }
//   } while (num !== 1);

//   let max = MaxNumInArr(arr);

//   console.log(count);
//   console.log(arr);
//   console.log(max);
// }

// hayesSeq(9);

// ------------------------

// let str = "abracadabra";
// let arr = str.split("b");
// console.log(arr);

// ----------------------------

function random() {
  let a = Math.random() * 10;
  let b = Math.round(Math.random());
  if (b == 0) {
    a = -a;
  }
  console.log(a);
}

random();
