class Car {
    constructor(model, engineCC, color) {
        this.model = model;
        this.engineCC = engineCC;
        this.color = color;
    }
    display() {
        console.log(`Model: ${this.model} | Engine CC: ${this.engineCC} | has ${this.color} color`);
    }
}
// here we display all properties directly try after changing access modifier.
// Type 1:
// let car1 = new Car("Maruti800", 750, "black");
// car1.display();
// console.log("Model: "+car1.model);
// console.log("Engine CC: "+car1.engineCC);
// console.log("Color: "+car1.color);
// let car2 = new Car("Punch", 800, "White");
// car2.display();
// console.log("Model: "+car2.model);
// Property 'engineCC' is protected and only accessible within class 'Car' and its subclasses.
// console.log("Engine CC: "+car2.engineCC);
// Property 'color' is private and only accessible within class 'Car'
// console.log("Color: "+car2.color);
class RacingCar extends Car {
    constructor(model, engineCC, color, speed) {
        super(model, engineCC, color);
        this.speed = speed;
    }
    display() {
        console.log(`Model: ${this.model} | Engine CC: ${this.engineCC} | Speed: ${this.speed}`);
    }
}
let racingCar = new RacingCar("Punch", 800, "White", 100);
racingCar.display();
