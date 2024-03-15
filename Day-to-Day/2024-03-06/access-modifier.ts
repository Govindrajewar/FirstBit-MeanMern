class Car1{
    // Type 1:
    // model: string;
    // engineCC:number;
    // color:string;

    // Type 2:
    public model: string;
    protected engineCC:number;
    private color:string;

    constructor(model:string, engineCC:number, color:string){
        this.model = model;
        this.engineCC = engineCC;
        this.color = color;
    }

    display():void{
        console.log(`Model: ${this.model} | Engine CC: ${this.engineCC} | has ${this.color} color`);
    }
}

// here we display all properties directly try after changing access modifier.
// Type 1:
// let car1 = new Car1("Maruti800", 750, "black");
// car1.display();
// console.log("Model: "+car1.model);
// console.log("Engine CC: "+car1.engineCC);
// console.log("Color: "+car1.color);


// let car2 = new Car1("Punch", 800, "White");
// car2.display();
// console.log("Model: "+car2.model);
// Property 'engineCC' is protected and only accessible within class 'Car' and its subclasses.
// console.log("Engine CC: "+car2.engineCC);

// Property 'color' is private and only accessible within class 'Car'
// console.log("Color: "+car2.color);


class RacingCar1 extends Car1 {
    speed:number;

    constructor(model:string, engineCC:number,  color:string, speed:number) {
        super(model, engineCC, color);
        this.speed = speed;
    }

    display():void{
        console.log(`Model: ${this.model} | Engine CC: ${this.engineCC} | Speed: ${this.speed}`);
    }
}

let racingCar1 = new RacingCar1("Punch", 800, "White", 100);
racingCar1.display();