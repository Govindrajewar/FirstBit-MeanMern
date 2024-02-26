/**
 * Commands to execute the file via Terminal
 * 1. cd .\Day-to-Day\js
 * 2. node .\36-javaScript-objects.js
 */

// Nested Objects:
/*
let student = {
    rollno: 7,
    name: "MS Dhoni",
    email: "msdhoni@gmail.com",
    address: {
        street: 202,
        city: "Nanded",
        pinCode: 431602,
        state: "MH",
        printPinCode: function (){
            return this.pinCode;
        }
    },
    display: function(){
    console.log(this.name + " student has roll no = " + this.rollno);
    }
}


console.log(student);
console.log(student.rollno);
console.log(student.name);
console.log(student.email);
console.log(student.address.street);
console.log(student.address.city);
console.log(student.address.pinCode);
console.log(student.address.state);
console.log(student.address.printPinCode());
*/

// Constructor Function:
/*
function Book (title, author, price){
    this.title = title;
    this.author = author;
    this.price = price;

    this.read = function (){
        console.log("I am reading " + this.title + " written by " + this.author);
    }
}

let b1 = new Book("Wings of Fire", "Dr. Kalam", 500);
console.log(b1);
b1.read();

let b2 = new Book("Let Us C", "Yashwant Kanetkar", 299);
console.log(b2);
b2.read();
*/


// Class:

class Car {
    constructor(brand, model, price){
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    Print(){
        console.log(
            "Brand : " + this.brand+
            " Model : " + this.model+
            " Price : " + this.price
        )
    }
}

let car1 = new Car("Honda", "Jazz", 1100000);
car1.Print();