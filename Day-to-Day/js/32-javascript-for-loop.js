/**
 * command to run .js file directly
 * cd .\Day-to-Day\js
 * node .\32-javascript-for-loop.js
 */


console.log("Standard for loop");
for(let i=1; i<=5; i++){
    console.log(i);
}


console.log("for-in loop");
let array = [10, 20, 30, 40, 50];
for(let i in array){
    console.log("index = ", i);
    console.log("value of index = ", array[i]);
}


console.log("for-of loop");
let msg = "welcome";
for(let e of msg){
    console.log(e);
}

