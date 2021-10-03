function myFunc(inputArray, criteria) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = price;
      this.status = status;
    }
  }
  let exitArray = [];

  inputArray.forEach((x) => {
    let [currentDestination, currentPrice, currentStatus] = x.split("|");
    let fixedPrice = Number(currentPrice);
    exitArray.push(new Ticket(currentDestination, fixedPrice, currentStatus));
  });

  if (typeof criteria == "string") {
    return exitArray.sort((a, b) => a[criteria].localeCompare(b[criteria]));
  } else {
    return exitArray.sort((a, b) => a.price - b.price);
  }
}

console.log(
  myFunc(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "status"
  )
);
