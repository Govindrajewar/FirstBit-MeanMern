"use strict";
class myStudent {
    // method:
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
let myStudent1 = new myStudent("Rahul", 24);
console.log(typeof myStudent1);
myStudent1.display();
