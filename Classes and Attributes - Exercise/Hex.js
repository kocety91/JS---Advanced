class Hex {
  constructor(value) {
    this.value = value;
  }
  valueOf() {
    return this.value;
  }
  toString() {
    let hexdec = this.value.toString(16).toUpperCase();
    return "0x" + hexdec;
  }

  plus(input) {
    return new Hex(input.value + this.value);
  }

  minus(input) {
    return new Hex(this.value - input.value);
  }

  static parse(input) {
    return parseInt(input, 16);
  }
}

let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256;
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === "0xF");
console.log(Hex.parse("AAA"));
