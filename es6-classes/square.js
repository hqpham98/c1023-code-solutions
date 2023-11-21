/* eslint-disable no-undef -- Shape is imported by .html */
/* exported Square */
class Square extends Shape {
  constructor(w) {
    super(w ** 2, w * 4);
    this.width = w;
  }

  describe() {
    return `${super.describe()} width:${this.width}`;
  }
}

const newSquare = new Square(10);
console.log(newSquare.describe());
