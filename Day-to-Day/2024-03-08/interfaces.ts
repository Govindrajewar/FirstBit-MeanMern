interface Shape{
    side:number;
}


class Rectangle implements Shape{
    side: number;
    constructor(side:number){
        this.side = side;
    }

    display():void{
        console.log(`side: ${this.side}`);
    }
}


let rectangle = new Rectangle(10);
rectangle.display();

