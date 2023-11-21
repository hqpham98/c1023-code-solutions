/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Circle */

class Circle extends Shape {
  constructor(r) {
    super(Math.PI * r ** 2, 2 * Math.PI * r);
    this.radius = r;
  }

  describe() {
    return `${super.describe()} radius:${this.radius}`;
  }
}

const newCircle = new Circle(4);
console.log(newCircle.describe());
