function solution() {
  let recepies = {
    apple: { carbohydrate: 1, flavour: 2 },
    lemonade: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    eggs: { protein: 5, fat: 1, flavour: 1 },
    turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
  };

  let storage = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0,
  };

  let obj = {
    restock(microelement, quantity) {
      storage[microelement] += Number(quantity);
      return "Success";
    },
    prepare(recipe, quantity) {
      let keys = Object.keys(recepies[recipe]);
      let values = Object.values(recepies[recipe]);

      let errorArray = keys.filter(
        (key, index) => storage[key] < values[index] * quantity
      );

      if (errorArray.length > 0) {
        throw `Error: not enough ${errorArray[0]} in stock`;
      } else {
        let currentRecipe = recepies[recipe];
        for (const key in currentRecipe) {
          if (currentRecipe[key] * quantity <= storage[key]) {
            storage[key] -= currentRecipe[key] * quantity;
          }
        }
      }
      return "Success";
    },
    report() {
      let emptyStr = "";
      for (const key in storage) {
        emptyStr += `${key}=${storage[key]} `;
      }

      return emptyStr.trim();
    },
  };

  return function (input) {
    let [command, microelement, quantity] = input.split(" ");
    try {
      return obj[command](microelement, quantity);
    } catch (error) {
      return error;
    }
  };
}

let manager = solution();
console.log(manager("restock flavour 50")); // Success
console.log(manager("prepare lemonade 4")); // Error: not enough carbohydrate in stock
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));
