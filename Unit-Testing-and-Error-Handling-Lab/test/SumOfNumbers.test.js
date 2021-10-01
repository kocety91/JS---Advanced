const sum = require("../SumofNumbers");
const { assert } = require("chai");

describe("test sum functionalitu", () => {
  it("sum work correctly", () => {
    let input = [1, 2, 3, 4];
    let expectedResult = 10;
    let actualResult = sum(input);

    assert.equal(actualResult, expectedResult);
  });

  it("sum work incorrectly", () => {
    let input = [1, 2, 3, 4];
    let emptyInput = [];
    let expectedResult = 15;
    let actualResult = sum(input);

    assert.notEqual(actualResult, expectedResult);
    assert.notEqual(actualResult, emptyInput);
  });
});
