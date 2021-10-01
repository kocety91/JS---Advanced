const isOddOrEven = require("..//EvenorOdd");
const { assert, expect } = require("chai");

describe("test functionality of isOddorEven", () => {
  it("isOddorEven work  correct with input and return even", () => {
    let result = isOddOrEven("koce");
    assert.equal(result, "even");
    expect(result).to.be.a("string");
  });
  it("isOddorEven work correct with input and return odd", () => {
    let result = isOddOrEven("sas");
    assert.equal(result, "odd");
    expect(result).to.be.a("string");
  });

  it("isOddorEven work  incorrect  when input isnt string", () => {
    let resultInt = isOddOrEven(4);
    let resultArray = isOddOrEven([]);
    let resultObj = isOddOrEven({});

    assert.equal(resultInt, undefined);
    assert.equal(resultArray, undefined);
    assert.equal(resultObj, undefined);
  });
});
