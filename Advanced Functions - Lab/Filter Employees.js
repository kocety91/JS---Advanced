function myFunc(input, criteria) {
  let key = criteria.split("-")[0];
  let value = criteria.split("-")[1];
  let array = JSON.parse(input);

  if (value == "all") {
    array.forEach((emp, index) => {
      console.log(
        `${index}. ${emp.first_name + " " + emp.last_name} - ${emp.email}`
      );
    });
  } else {
    array
      .filter((x) => x[key] == value)
      .forEach((emp, index) => {
        console.log(
          `${index}. ${emp.first_name + " " + emp.last_name} - ${emp.email}`
        );
      });
  }
}

myFunc(
  `[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  },  
{
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }]`,
  "gender-Female"
);
