const lookupChar = require("..//CharLookup");
const { assert, expect } = require("chai");

describe("test functionality of lookUpChar", () => {
  it("lookUpChar work correct with string and int", () => {
    let result = lookupChar("mnogoGotinStol", 3);
    assert.equal(result, "g");
  });
  it("lookUpChar work incorrect with not string and not int", () => {
    let result = lookupChar(44, 3);
    let result2 = lookupChar("stolche", "molche");

    assert.equal(result, undefined);
    assert.equal(result2, undefined);
  });
  it("lookUpChar work incorrect when int is bigger/smaller than str.lenght", () => {
    let result2 = lookupChar("sas", 5);
    let result3 = lookupChar("sas", -5);

    expect(result2).to.be.a("string", "Incorrect index");
    expect(result3).to.be.a("string", "Incorrect index");
  });
});
