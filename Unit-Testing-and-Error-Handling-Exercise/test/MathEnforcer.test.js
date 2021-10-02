const mathEnforcer = require("..//MathEnforcer");
const { assert, expect } = require("chai");

describe("test functionality of mathEnforcer", () => {
  it("add work correctly with number", () => {
    let ss = mathEnforcer;
    let sum = ss.addFive(10);
    let sum1 = ss.addFive(5.5);
    let sum2 = ss.addFive(-10);

    expect(sum).to.be.a("number");
    expect(sum1).to.be.a("number");
    expect(sum2).to.be.a("number");

    assert.equal(sum, 15);
    assert.equal(sum1, 10.5);
    assert.equal(sum2, -5);
  });
  it("subtractTen work  correctly with number", () => {
    let ss = mathEnforcer;
    let sum = ss.subtractTen(30);
    let sum1 = ss.subtractTen(22.5);
    let sum2 = ss.subtractTen(-11);

    expect(sum).to.be.a("number");
    expect(sum1).to.be.a("number");
    expect(sum2).to.be.a("number");

    assert.equal(sum, 20);
    assert.equal(sum1, 12.5);
    assert.equal(sum2, -21);
  });
  it("sum work correctly with number", () => {
    let ss = mathEnforcer;
    let sum = ss.sum(10, 20);
    let sum1 = ss.sum(5.5, 5.5);
    let sum2 = ss.sum(-1, -3);

    expect(sum).to.be.a("number");
    expect(sum1).to.be.a("number");
    expect(sum2).to.be.a("number");

    assert.equal(sum, 30);
    assert.equal(sum1, 11);
    assert.equal(sum2, -4);
  });
  it("add/substractTen/sum  return undefined", () => {
    let ss = mathEnforcer;
    let sum = ss.sum("xxx", 22);
    let sum1 = ss.sum({}, []);
    let sum2 = ss.sum(-156, [1, 2, 3]);
    let add = ss.addFive("xD");
    let subs = ss.subtractTen([]);
    assert.equal(sum, undefined);
    assert.equal(sum1, undefined);
    assert.equal(sum2, undefined);
    assert.equal(add, undefined);
    assert.equal(subs, undefined);
  });
});
