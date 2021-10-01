const symetry = require("../CheckforSymmetry");
const { assert } = require("chai");

describe("test functionality of symetry", () => {
  it("symetry work correctly", () => {
    let input = [1, 2, 3, 2, 1];
    let expectedResult = true;
    let actualResult = symetry(input);

    assert.equal(actualResult, expectedResult);
  });
  // it("symetry work incorrectly", () => {
  //   let input = [1, 2, 3, 22, 11];
  //   let emtyArray = [];
  //   let expectedResult = false;
  //   let actualResult = symetry(input);

  //   assert.notEqual(actualResult, expectedResult);
  //   assert.notEqual(actualResult, emtyArray);
  //   assert.notEqual(actualResult, 0);
  //   assert.notEqual(actualResult, {});
  //   assert.notEqual(actualResult, null);
  //   assert.notEqual(actualResult, "someString");
  // });
});
