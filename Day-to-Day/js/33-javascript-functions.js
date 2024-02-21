/**
 * command to run .js file directly
 * cd .\Day-to-Day\js
 * node .\33-javascript-functions.js
 */


console.log("Type 1: function without parameters:");

function abc(){
console.log("abc function");
}

// function call:
abc();


console.log("Type 2: function which accepts parameters:");

function add(x, y){
    console.log("Addition = ", x+y);
}

// function call:
add(10, 20);


console.log("Type 3: function which accepts parameters & returns value:");

function multiply(a, b){
    return (a*b);
}

// function call:
var result = multiply(4,6);
console.log("multiplication = ", result);


console.log("Type 4: passing function as parameter to another function:");

function process(){
    console.log("Processing...");
}

function demo(fn){
    console.log("Start Processing");
    fn();
    console.log("End Processing");
}

// function call:
demo(process);