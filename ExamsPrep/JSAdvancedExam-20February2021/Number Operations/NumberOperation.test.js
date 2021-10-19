const numberOperation = require("./NumberOperations");
let { assert, expect } = require("chai");

describe("test functionality of numberOfOperations ", () => {
  it("powNumber should work correct", () => {
    let input = 3;
    let result = numberOperation.powNumber(input);

    assert.equal(9, result);
  });

  it("numberChecker should work correctly", () => {
    let input = 50;
    let input2 = 99;
    let result = numberOperation.numberChecker(input);
    let result2 = numberOperation.numberChecker(input2);

    assert.equal("The number is lower than 100!", result);
    assert.equal("The number is lower than 100!", result2);
  });

  it("numberChecker return error", () => {
    let input = 100;
    let input2 = 150;

    let result = numberOperation.numberChecker(input);
    let result2 = numberOperation.numberChecker(input2);

    assert.equal("The number is greater or equal to 100!", result);
    assert.equal("The number is greater or equal to 100!", result2);
  });

  it("numberChecker throw error", () => {
    let input3 = "opa";

    expect(() => numberOperation.numberChecker(input3)).to.throw(
      Error,
      "The input is not a number!"
    );
  });

  it("sumArray should work correctly", () => {
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
    let sum = numberOperation.sumArrays(array1, array2);
    assert.deepEqual([5, 7, 9], sum);
  });
});
