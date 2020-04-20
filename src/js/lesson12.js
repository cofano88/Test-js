// try {
//   console.log(a);
// } catch (error) {
//   console.log(error.name);
// }

// ----------------------------------
let i;
let a = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let weight = 91;
    let height = 1.85;
    resolve((i = weight / Math.pow(height, 2)));
  }, 3000);
});

a.then(function () {
  console.log(`Your weight body index is ${i}!`);
}).then(console.log("hello"));
