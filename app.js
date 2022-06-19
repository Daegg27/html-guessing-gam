let count = 0;
let randomNumber = Math.floor(Math.random() * 100)

// Couldn't get this to work
// function HelperFunction(guess){
//     if (guess > 100){
//         guess = 100
//     }
// }

function PlayGame(event){
    event.preventDefault()

    let guess = Number(event.target.elements[0].value);
    let incorrect = document.getElementById("incorrect")
    let guessNotifier = document.getElementById("guessCount")
    let guessCount = document.getElementById("guessHolder")
    let input = document.getElementById("input")
    
    // Wanted to use a helper function 
    if (guess > 100){
        guess = 100
    }

    if (guess < randomNumber){
        if (count == 0){
            guessNotifier.innerText = "Current Guesses:";
        }
        incorrect.innerText = "Guess HIGHER!";
        guessNotifier.innerText += `\n${guess}: Too low!`
    }
    else if (guess > randomNumber){
        if (count == 0){
            guessNotifier.innerText = "Current Guesses:";
        }
        incorrect.innerText = "Guess LOWER!";
        guessNotifier.innerText += `\n${guess}: Too high!`
    }
    else{
        if (count == 0){
            guessNotifier.innerText = "Current Guesses:";
        }
        incorrect.innerText = "That's correct! Nice work!";
        guessNotifier.innerText += `\n${guess}: Spot on!`
    }
    count++;
    input.value = "";
}