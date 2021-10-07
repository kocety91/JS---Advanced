class Restaurant {
  constructor(budgetMoney) {
    this.budgetMoney = budgetMoney;
    this.menu = {};
    this.stockProducts = {};
    this.history = [];
  }

  loadProducts(products) {
    products.forEach((x) => {
      let [productName, productQuantity, productTotalPrice] = x.split(" ");
      let message =
        Number(productTotalPrice) <= this.budgetMoney
          ? `Successfully loaded ${productQuantity} ${productName}`
          : `There was not enough money to load ${productQuantity} ${productName}`;

      if (
        Number(productTotalPrice) <= this.budgetMoney &&
        !this.stockProducts[productName]
      ) {
        this.stockProducts[productName] = Number(productQuantity);
        this.budgetMoney -= Number(productTotalPrice);
      } else if (
        this.stockProducts[productName] &&
        this.budgetMoney >= Number(productTotalPrice)
      ) {
        this.stockProducts[productName] += Number(productQuantity);
        this.budgetMoney -= Number(productTotalPrice);
      }

      this.history.push(message);
    });
    return this.history.join("\n");
  }

  addToMenu(meal, array, price) {
    if (this.menu[meal]) {
      return `The ${meal} is already in the our menu, try something different.`;
    }

    array.forEach((x) => {
      let [productName, productQuantity] = x.split(" ");
      if (!this.menu[meal]) {
        this.menu[meal] = {
          products: [],
          price,
        };
      }

      this.menu[meal].products.push({
        [productName]: productQuantity,
      });
    });

    let count =
      Object.keys(this.menu).length === 1
        ? `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        : `Great idea! Now with the ${meal} we have ${
            Object.keys(this.menu).length
          } meals in the menu, other ideas?`;

    return count;
  }

  showTheMenu() {
    return Object.keys(this.menu).length === 0
      ? `Our menu is not ready yet, please come later...`
      : Object.entries(this.menu)
          .map((x) => `${x[0]} - $ ${x[1].price}`)
          .join("\n");
  }

  makeTheOrder(meal) {
    if (!this.menu[meal]) {
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }

    let productsNeeded = this.menu[meal].products;

    let cloneStock = Object.assign({}, this.stockProducts);
    let cloneBudget = this.budgetMoney;

    for (const singleProduct of productsNeeded) {
      for (const key in singleProduct) {
        if (this.stockProducts[key] < singleProduct[key]) {
          this.stockProducts.assign(cloneStock);
          this.cloneBudget.assign(cloneBudget);
          return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
        }

        this.stockProducts[key] -= singleProduct[key];
        this.budgetMoney += singleProduct[key];
      }
    }
    return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
  }
}

let kitchen = new Restaurant(1000);
console.log(
  kitchen.loadProducts([
    "Banana 10 5",
    "Banana 20 10",
    "Strawberries 50 30",
    "Yogurt 10 10",
    "Yogurt 500 1500",
    "Honey 5 50",
  ])
);
