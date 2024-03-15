class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}
let person = new Person("Abhi", 7);
person.display();
