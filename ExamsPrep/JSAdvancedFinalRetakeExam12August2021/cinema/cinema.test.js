const cinema = require("./cinema");
const { assert, expect } = require("chai");

describe("Test cinema functionality", () => {
  it("show movies should work correctly", () => {
    let input = ["King Kong", "The Tomorrow War", "Joker"];
    let ss = input.join(", ");
    let expected = cinema.showMovies(input);

    assert.deepEqual(ss, expected);
    assert.equal(ss.length, expected.length);
  });

  it("show movies throw error", () => {
    let input = [];
    let input2 = ["Iron Man", "Superman"];

    expect(() =>
      cinema
        .showMovies(input)
        .to.throw("There are currently no movies to show.")
    );

    expect(() =>
      cinema
        .showMovies(input2)
        .to.throw("There are currently no movies to show.")
    );
  });

  it("ticket price should work correctly", () => {
    let input = "Premiere";
    let input2 = "Normal";
    let input3 = "Discount";
    let expected = cinema.ticketPrice(input);
    let expected2 = cinema.ticketPrice(input2);
    let expected3 = cinema.ticketPrice(input3);

    assert.equal(12.0, expected);
    assert.equal(7.5, expected2);
    assert.equal(5.5, expected3);
  });

  it("ticket price throw erro", () => {
    let input = "";
    let input2 = "Mamba";

    expect(() =>
      cinema.ticketPrice(input).to.throw("Invalid projection type.")
    );
    expect(() =>
      cinema.ticketPrice(input2).to.throw("Invalid projection type.")
    );
  });

  it("swap seats in hall should work correctly", () => {
    let firstNum = 10;
    let secondNum = 15;

    let result = cinema.swapSeatsInHall(firstNum, secondNum);

    let expercted = "Successful change of seats in the hall.";

    assert.equal(expercted, result);
  });

  it("swap seats in hall throw error", () => {
    let firstNum = -10;
    let secondNum = 15;
    let thridNum = 35;
    let fourNum = -1;

    let result = cinema.swapSeatsInHall(firstNum, secondNum);
    let result2 = cinema.swapSeatsInHall("xaxax", secondNum);
    let result3 = cinema.swapSeatsInHall(thridNum, secondNum);
    let result4 = cinema.swapSeatsInHall(firstNum, thridNum);
    let result5 = cinema.swapSeatsInHall(thridNum, fourNum);

    let expercted = "Unsuccessful change of seats in the hall.";
    assert.equal(expercted, result);
    assert.equal(expercted, result2);
    assert.equal(expercted, result3);
    assert.equal(expercted, result4);
    assert.equal(expercted, result5);
  });
});
