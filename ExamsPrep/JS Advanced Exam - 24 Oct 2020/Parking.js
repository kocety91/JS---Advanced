class Parking {
  constructor(capcity) {
    this.capcity = capcity;
    this.vehicles = [];
  }

  addCar(carModel, carNumber) {
    if (this.capcity <= 0 || this.vehicles.length >= this.capcity) {
      throw new Error("Not enough parking space.");
    } else {
      this.vehicles.push({
        carModel,
        carNumber,
        payed: false,
      });
      this.capcity--;
      return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
  }

  removeCar(carNumber) {
    let ss = "";
    let arr = this.vehicles;
    let findCar = arr.find((x) => x.carNumber == carNumber);
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].carNumber == carNumber && arr[index].payed == false) {
        throw new Error(
          `${carNumber} needs to pay before leaving the parking lot.`
        );
      } else if (
        arr[index].carNumber == carNumber &&
        arr[index].payed == true
      ) {
        this.capcity++;
        this.vehicles.splice(index, 1);
        ss += `${carNumber} left the parking lot.`;
        break;
      } else if (!findCar) {
        throw new Error(`The car, you're looking for, is not found.`);
      }
    }
    return ss;
  }

  pay(carNumber) {
    let ss = "";
    let arr = this.vehicles;
    for (let index = 0; index < arr.length; index++) {
      if (arr[index].carNumber == carNumber && arr[index].payed == true) {
        throw new Error(`${carNumber}'s driver has already payed his ticket.`);
      } else if (
        arr[index].carNumber == carNumber &&
        arr[index].payed == false
      ) {
        ss += `${carNumber}'s driver successfully payed for his stay.`;
        arr[index].payed = true;
        break;
      } else if (index == arr.length - 1) {
        throw new Error(`${carNumber} is not in the parking lot.`);
      }
    }
    return ss;
  }

  getStatistics(carNumber) {
    if (carNumber == undefined || !carNumber) {
      let ss = `The Parking Lot has ${this.capcity} empty spots left.\n`;

      let gg = this.vehicles.sort((a, b) =>
        a.carModel.localeCompare(b.carModel)
      );
      gg.forEach((x) => {
        let hasPayed = x.payed === true ? "Has payed" : "Not payed";
        ss += `${x.carModel} == ${x.carNumber} - ${hasPayed} \n`;
      });

      return ss.trim();
    } else {
      this.vehicles.forEach((x) => {
        let hasPayed = x.payed === true ? "Has payed" : "Not payed";
        if (x.carNumber == carNumber) {
          return `${x.carModel} == ${x.carNumber} - ${hasPayed}`;
        }
      });
    }
  }
}

const parking = new Parking(11);
console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.addCar("Koce car", "TX0000BS"));
console.log(parking.addCar("Misho car", "BS0000BS"));
console.log(parking.getStatistics());
console.log(parking.pay("TX3691CA"));
// console.log(parking.pay("BS0000BS"));
// console.log(parking.pay("TX0000BS"));
console.log(parking.removeCar("BS0000BS"));
