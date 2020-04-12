// const Shapes = {
//   circle: "Circle",
//   square: "Square",
// };

function Shape(type, name) {
  this.name = name;
  this.type = type;
  this.square = function () {
    return this.calcSquare();
  };
}

// let cir1 = new Circle(4, "one");
// console.log(cir1.calcSquare());

// ------------------------------------------------

function Square(a, name) {
  const square = new Shape("Square", name);
  square.side = a;
  square.calcSquare = function () {
    let s = Math.pow(this.side, 2);
    return s;
  };
}

// let sq1 = new Square(4);
// console.log(sq1.calcSquare());

// ------------------------------------------------

function Circle(d, name) {
  const circle = new Shape("Circle", name);
  circle.diameter = d;
  circle.calcSquare = function () {
    let s = (3.14 * Math.pow(this.diameter, 2)) / 4;
    return s;
  };
  return circle;
}

// let cir1 = new Circle(4, "one");
// console.log(cir1.calcSquare());

// --------------------------------------------------------
console.log(new Circle(4, "one").calcSquare());

