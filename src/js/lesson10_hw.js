class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = "0" + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = "0" + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = "0" + secs;

    let output = this.template
      .replace("h", hours)
      .replace("m", mins)
      .replace("s", secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}

class ExtendedClock extends Clock {
  constructor({ template }, precision = 1000) {
    super({ template });
    this.precision = precision;
  }

  render() {
    setTimeout(() => super.render(), this.precision);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}

let clock = new ExtendedClock({ template: "h:m:s" }, 5000);
clock.start();

// ------------------------------------------------

class Shape {
  constructor(type, name) {
    this.name = name;
    this.type = type;
  }

  square() {
    return this.calcSquare();
  }
}

class Square extends Shape {
  constructor(a, name) {
    super("square", name);
    this.side = a;
  }

  calcSquare() {
    return Math.pow(this.side, 2);
  }
}

class Circle extends Shape {
  constructor(d, name) {
    super("circle", name);
    this.diameter = d;
  }
  calcSquare() {
    return (Math.PI * Math.pow(this.diameter, 2)) / 4;
  }
}

console.log(new Circle(4, "one").calcSquare());
