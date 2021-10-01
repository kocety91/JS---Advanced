const createCalculator = require("../Subtract");
const { assert, expect } = require("chai");

describe("functionality of createCalculator", () => {
  it("createCalculator work correct", () => {
    let result = createCalculator();

    expect(result).to.have.ownProperty("add");
    expect(result).to.have.ownProperty("subtract");
    expect(result).to.have.ownProperty("get");
  });
  it("createCalculator work incorrect", () => {
    let result = createCalculator();

    expect(result).to.have.ownProperty("add");
    expect(result).to.not.have.ownProperty("test");
    expect(result).to.not.have.ownProperty("againTest");
  });
  it("add function should work correct", () => {
    let result = createCalculator();
    result.add(5);
    let actual = result.get();
    assert.equal(actual, 5);
  });
  it("add function should work incorrect", () => {
    let result = createCalculator();
    result.add("string");
    let actual = result.get();
    expect(actual).to.be.NaN;
  });
  it("subract function should work correct", () => {
    let result = createCalculator();
    result.add(10);
    result.subtract(5);
    let actual = result.get();
    assert.equal(actual, 5);
  });
  it("subract function should work incorrect", () => {
    let result = createCalculator();
    result.add("string");
    result.subtract(5);
    let actual = result.get();
    expect(actual).to.be.NaN;
  });

  it("get function should work correct", () => {
    let result = createCalculator();
    result.add(5);
    let actual = result.get();
    assert.equal(actual, 5);
  });
});
