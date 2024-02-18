let number = 0;

function acceptNumber(){
    number = Number(prompt('Enter number to check'))
}

function checkOddEven(){
    if(number%2 === 0){
        document.getElementById('result').innerText = `Result : ${number}  is an even number`;
    } else{
        document.getElementById('result').innerText = `Result : ${number}  is an odd number`;
    }
}