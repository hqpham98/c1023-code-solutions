/* exported Shape */
class Shape {
  constructor(a, p) {
    this.area = a;
    this.perimeter = p;
  }

  describe() {
    return `area:${this.area} perimeter:${this.perimeter}`;
  }
}

const newShape = new Shape(100, 40);
console.log(newShape.describe());
