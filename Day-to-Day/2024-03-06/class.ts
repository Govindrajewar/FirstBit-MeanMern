class Person{
    name: string;
    age: number;

    constructor(name: string, age: number){
        this.name = name;
        this.age = age;
    }

    display():void{
        console.log(`${this.name} is ${this.age} years old`);
    }
}


let person = new Person("Abhi",25);
person.display();