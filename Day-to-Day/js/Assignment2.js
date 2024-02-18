let i=0;
let array = [];

function getNumbers(){

    for(i=0 ; i<5 ; i++){
        array[i] = Number(prompt(`Enter ${i+1} number :`))
    }
}

function maxNumber(){
    i=0;
    array.forEach( (num) => {
        if(i<num){
            i = num;
        }
    })

    document.getElementById('maxNum').innerText = `${i} is the maximum number`
}

