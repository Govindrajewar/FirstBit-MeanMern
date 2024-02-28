// Constants
let array = [   0, 1, 1, 0, 1,
                0, 0, 1, 0, 1,
                1, 0, 0, 1, 0,
                0, 1, 0, 0, 0,
                1, 0, 0, 1, 0
            ];
let guessCount  = 0;
let hitCount    = 0;


// Attach event listeners to game items
let items = document.getElementsByClassName('div-item');
for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function() {
        handleItemClick(i);
    });
}


// Function to handle clicks on game items
function handleItemClick(index) {
    let element = document.getElementsByClassName('div-item')[index];
    if (array[index] === 1) {
        element.style.backgroundColor = 'green';
        element.innerText = '✔️';
    } else {
        element.style.backgroundColor = 'violet';
        element.innerText = '❌';
    }
    checkGuess(index + 1);
}


// Function to check the guess
function checkGuess(input) {
    if (input === 0) return;

    if (input < 1 || input > 25) {
        alert("Enter a valid number");
        return;
    }

    let index = input - 1;
    if (array[index] === 1) {
        increaseCounter(1);
        alert("You have hit a battleship");
    } else {
        increaseCounter(0);
        alert("You missed the battleship");
    }
}


// Function to update counters
function increaseCounter(counter) {
    guessCount++;
    document.getElementById('gsCount').innerText = guessCount;

    if (counter === 1) {
        hitCount++;
        document.getElementById('htCount').innerText = hitCount;

        // TODO: Add reset button when user hit all battleship.
        if(hitCount === 10){
            alert("You have sunk the battleship");
            document.getElementById('successful-message').innerText = `Congratulations! You've destroyed all BattleShips in ${guessCount} Guesses`;
        }
    }
}

