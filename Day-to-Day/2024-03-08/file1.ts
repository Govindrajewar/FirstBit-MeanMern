export class Vehicle{
    model:number;
    color:string;

    constructor(model:number, color:string){
        this.model = model;
        this.color = color;
    }

    display():void{
        console.log(`Model: ${this.model} | Color: ${this.color}`);
    }
}