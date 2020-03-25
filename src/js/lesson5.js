// const user = {
//   name: "John",
//   surname: "Smith"
// };

// console.log(user);

// user.name = "Pete";
// delete user.name;

// console.log(user);

// -----------------------------------------------------------

// const salaries = {
//   //   John: 100,
//   //   Ann: 160,
//   //   Pete: 130
// };

// function summ() {
//   let sum = 0;
//   for (key in salaries) {
//     sum += salaries[key];
//   }
//   console.log(sum);
// }

// summ();

// -----------------------------------------------------------

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };
// function multiplyNumeric() {
//   for (key in menu) {
//     if (typeof menu[key] === 'number') {
//       menu[key] = menu[key] * 2;
//     } else {
//       continue;
//     }
//   }
//   console.log(menu);
// }

// multiplyNumeric();

// -----------------------------------------------------------

// let arr = [4, 7, 10, 33, 2, 1];

// function more7() {
//   for (nums of arr) {
//     if (nums > 7) {
//       console.log(nums);
//     } else {
//       continue;
//     }
//   }
// }

// more7();

// -----------------------------------------------------------

let arr = [{ one: 4 }, { two: 11 }, { three: 66 }];

function more7Obj() {
  for (nums of arr) {
    for (key in nums) {
      if (nums[key] > 7) {
        console.log(key);
      } else {
        continue;
      }
    }
  }
}

more7Obj();
