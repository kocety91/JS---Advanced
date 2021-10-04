class List {
  constructor(array) {
    this.array = [];
    this.size = 0;
  }
  add(element) {
    this.array.push(element);
    this.size++;
  }
  remove(i) {
    for (let index = 0; index < this.array.length; index++) {
      if (i == index) {
        this.array.splice(i, 1);
        this.size--;
      }
    }
  }
  get(i) {
    for (let index = 0; index < this.array.length; index++) {
      if (i == index) {
        let num = this.array[index];
        return num;
      }
    }
  }
}

let list = new List();
list.add(5);
list.add(3);
list.remove(0);
console.log(list.size);
