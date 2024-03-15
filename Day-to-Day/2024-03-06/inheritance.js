class Personn {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
class Employee extends Personn {
    constructor(name, age, deptId, salary) {
        super(name, age);
        this.deptId = deptId;
        this.salary = salary;
    }
    display() {
        super.display();
        console.log(`Dept Id: ${this.deptId} | Salary: ${this.salary}`);
    }
}
let emp1 = new Employee("Rahul", 21, 101, 50000);
emp1.display();
