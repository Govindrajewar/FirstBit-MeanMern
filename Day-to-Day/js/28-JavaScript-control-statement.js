function acceptData(){
    let name  = prompt('Enter your name');

    console.log(name);
    console.log(typeof name);


    let age  = Number(prompt('Enter your Age'));

    console.log(age);
    console.log(typeof age);
}

// 18-02-2024:↓

function findMax(){
    // Accept first number:
    let firstNumber = Number(prompt('Enter First Number:'));

    // Accept second number:
    let secondNumber = Number(prompt('Enter Second Number:'));

    // find max number:
    if(firstNumber>secondNumber){
        console.log(firstNumber+' is max number')
    } else {
        console.log(secondNumber+' is max number')
    }
}

// ladder statement:
let n = 0;

if(n>0) {
    console.log(n + " is a positive number");
} else if (n<0) {
    console.log(n + " is a negative number");
} else {
    console.log(n + " is Zero");
}


// switch statement
let responseCode = 500;

switch(responseCode){
    case 500:
        console.log('Internal Server Error')
        break;
    case 200:
        console.log('Successful')
        break;
    default:
        console.log('Unknown Error')
}