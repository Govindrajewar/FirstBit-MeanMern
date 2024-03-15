class Personn {
    name: string;
    age: number;

    constructor(name:string, age:number) {
        this.name = name;
        this.age = age;
    }

    display() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

class Employee extends Personn{
    deptId:number;
    salary:number;

    constructor(name:string, age:number, deptId:number, salary:number){
        super(name, age);
        this.deptId = deptId;
        this.salary = salary;
    }
    display():void{
        super.display();
        console.log(`Dept Id: ${this.deptId} | Salary: ${this.salary}`);
    }
}


let emp1 = new Employee("Rahul", 21, 101, 50000);
emp1.display();