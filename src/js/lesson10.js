// let car = {
//   make: "bmw",
//   model: "535",
//   gas: "diesel",
//   get fullCarName() {
//     return `${this.make} ${this.model} ${this.gas}`;
//   },
//   set fullCarName(value) {
//     this.model = value;
//   },
// };
// console.log(car.fullCarName);
// car.fullCarName = "audi";
// console.log(car.model);
// console.log(car.fullCarName);

// ----------------------------------------

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
  __proto__: head,
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table,
};

let pockets = {
  money: 2000,
  __proto__: bed,
};

console.log(pockets.glasses);
