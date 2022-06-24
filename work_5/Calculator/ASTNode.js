export class Operation {
  constructor({ type, right, left, value }) {
    this.type = type;
    this.right = right;
    this.left = left;
    this.value = value;    
  }

  run() {
    switch (this.type) {
      case "+":
        return this.left.run() + this.right.run();
      case "-":
        return this.left.run() - this.right.run();
      case "*":
        return this.left.run() * this.right.run();
      case "/":
        return this.left.run() / this.right.run();
      case "num":
        return Number(this.value);
    }
    return 0;
  }
}
