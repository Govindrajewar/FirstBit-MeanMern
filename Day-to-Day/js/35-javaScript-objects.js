/**
 * Commands to execute the file via Terminal
 * 1. cd .\Day-to-Day\js
 * 2. node .\35-javaScript-objects.js
 */


// Example 1: Create a simple object

let emp = {
    // properties:
    name: "Tushar",
    dept: "IT",
    salary: 35000,

    // methods:
    work: function () {
        // console.log("Tushar is working.");
        console.log(this.name +" is working.");

        // this is invalid method:
        // demo();

        // this is correct method to call another method
        this.demo();
    },

    demo: function () {
        console.log("This is a demo");
    }
}

// console.log(emp);
// console.log(emp.name);
// console.log(emp.dept);
// console.log(emp.salary);
// emp.work();


// Example 2: Add/Remove Properties:

let Book = {
    title: "Atomic Habits",
    author: "James Clear",
    prices: 500,

    read: function(){
        console.log("I am reading "+this.title);
    },

    getPrices: function(){
        return this.prices;
    }
}

console.log(Book);
Book.read();
console.log(Book.getPrices());

// It will give output as "undefined"
// console.log(Book.publication);


// Add new property to the Book:
Book.publication = "Penguin Publications";
// console.log(Book.publication);
// console.log(Book);

Book.display = function (){
    console.log(this.title + " | " + this.author + " | " + this.prices);
}

// Book.display();
console.log(Book);

// remove properties from the book object:
delete Book.prices;
console.log(Book);

// remove methods from the book object:
delete Book.getPrices;
console.log(Book);