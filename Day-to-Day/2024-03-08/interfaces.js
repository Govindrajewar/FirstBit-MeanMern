class Rectangle {
    constructor(side) {
        this.side = side;
    }
    display() {
        console.log(`side: ${this.side}`);
    }
}
let rectangle = new Rectangle(10);
rectangle.display();
