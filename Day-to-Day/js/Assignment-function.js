/**
 *
# Assignment:
1. Accept 2 numbers from the user

2. Accept a choice from user (1,2,3,4)

3. If choice is 1,
a. then call a function add()
b. and pass the 2 numbers read in step 1
c. It should print the addition

4. If choice is 2,
a. then call a function sub()
b. and pass the 2 numbers read in step 1
c. It should print the subtraction

5. If choice is 3,
a. then call a function mult()
b. and pass the 2 numbers read in step 1
c. It should print the multiplication

6. If choice is 4,
a. then call a function div()
b. and pass the 2 numbers read in step 1
c. It should print the division
 *
 */

let input1=0;
let input2=0;
let userInput=0;

function getInput(){
    input1 = Number(prompt("Enter 1 num : "));
    input2 = Number(prompt("Enter 2 num : "));

    chooseOption();
}


function chooseOption(){

    console.log("1. Addition");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");

    userInput = Number(prompt("Enter Option from above : "));

    seletedOption(userInput);
}

function seletedOption(userInput){
    switch(userInput){
        case 1:
            addition();
            break;
        case 2:
            subtraction();
            break;
        case 3:
            multiplication();
            break;
        case 4:
            division();
            break;
        default:
            console.log("Please, Enter valid input");
    }
}

function addition(){
    let add = input1+input2;
    console.log("Addition = ", add);
}

function subtraction(){
    let sub = input1-input2;
    console.log("subtraction = ", sub);
}

function multiplication(){
    let mult = input1*input2;
    console.log("Multiplication = ", mult);
}

function division(){
    let div = input1/input2;
    console.log("Division = ", div);
}