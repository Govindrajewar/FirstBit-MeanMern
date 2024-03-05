class myStudent{
    // properties:
    name: string;
    age: number;

    // method:
    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    display():void{
        console.log(`${this.name} is ${this.age} years old`);
    }
}

let myStudent1:myStudent = new myStudent("Rahul", 24);
console.log(typeof myStudent1);
myStudent1.display();

