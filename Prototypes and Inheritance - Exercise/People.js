function solution() {
  class Employee {
    constructor(name, age) {
      this.name = name;
      this.age = age;
      this.salary = 0;
      this.tasks = [];
      this._count = 0;
    }

    getSalary() {
      return this.salary;
    }

    work() {
      if (this._count === this.tasks.length) {
        this._count = 0;
      }
      console.log(this.tasks[this._count]);
      this._count++;
    }

    collectSalary() {
      console.log(`${this.name} received ${this.getSalary()} this month.`);
    }
  }

  class Junior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [`${name} is working on a simple task.`];
    }
  }

  class Senior extends Employee {
    constructor(name, age) {
      super(name, age);
      this.tasks = [
        `${name} is working on a complicated task.`,
        `${name} is taking time off work.`,
        `${name} is supervising junior workers`,
      ];
    }
  }

  class Manager extends Employee {
    constructor(name, age) {
      super(name, age);
      this.dividend = 0;
      this.tasks = [
        `${name} scheduled a meeting.`,
        `${name} is preparing a quarterly report.`,
      ];
    }

    getSalary() {
      return super.getSalary() + this.dividend;
    }
  }
  return { Employee, Junior, Senior, Manager };
}
