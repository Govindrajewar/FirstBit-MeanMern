console.log("Arrow Function");

let add = (a, b) => {
    return a+b;
}

// function call:
console.log("Addition = ", add(10, 20));


console.log("Callback Function");

console.log("Processing Start!");

setTimeout( () => {
    console.log("Processing Done!");
}, 5000);

console.log("Still Processing");

setTimeout( () => {
    console.log("Still Processing....");
}, 4000);

setTimeout( () => {
    console.log("Still Processing..");
}, 2000);

setTimeout( () => {
    console.log("Still Processing...");
}, 3000);

setTimeout( () => {
    console.log("Still Processing.");
}, 1000);

