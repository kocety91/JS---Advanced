let testNumbers = require("./testNumbers");
let { assert, expect } = require("chai");

describe("test functionality of testNumbers ", () => {
  it("sumNumber should work correctly", () => {
    let numOne = 4.0;
    let numTwo = 5.0;
    let numThree = -1.0;
    let numFour = -3.0;

    let result = testNumbers.sumNumbers(numOne, numTwo);
    let result2 = testNumbers.sumNumbers(numOne, numThree);
    let result3 = testNumbers.sumNumbers(numThree, numFour);

    assert.equal(9.0, result);
    assert.equal(3.0, result2);
    assert.equal(-4.0, result3);
  });

  it("sumNumber return undifined", () => {
    let numOne = "muhaha";
    let numTwo = "wtf";
    let numThree = 5.0;
    let numFour = 1.0;

    let result = testNumbers.sumNumbers(numOne, numTwo);
    let result2 = testNumbers.sumNumbers(numFour, numTwo);
    let result3 = testNumbers.sumNumbers(numOne, numThree);

    assert.equal(undefined, result);
    assert.equal(undefined, result2);
    assert.equal(undefined, result3);
  });

  it("numberChecker should work correctly", () => {
    let input = 4;
    let input2 = 3;
    let result = testNumbers.numberChecker(input);
    let result2 = testNumbers.numberChecker(input2);

    assert.equal("The number is even!", result);
    assert.equal("The number is odd!", result2);
  });

  it("numberCheck return error", () => {
    let input = "xD";
    let input2 = "";
    let input3 = [];

    expect(() =>
      testNumbers.numberChecker(input).to.throw("The input is not a number!")
    );
    expect(() =>
      testNumbers.numberChecker(input2).to.throw("The input is not a number!")
    );
    expect(() =>
      testNumbers.numberChecker(input3).to.throw("The input is not a number!")
    );
  });

  it("averageSumArray should work correctly", () => {
    let input = [1, 2, 3, 4];
    let result = testNumbers.averageSumArray(input);

    assert.equal(2.5, result);
  });
});
