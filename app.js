
let randomNumber = Math.floor(Math.random() * 100)
let count = 0

function PlayGame(event){
    event.preventDefault()

    let guess = Number(event.target.elements[0].value);
    let incorrect = document.getElementById("incorrect")
    let guessNotifier = document.getElementById("guessCount")
    let guessCount = document.getElementById("guessHolder")

    if (guess < randomNumber){
        if (count == 0){
            incorrect.innerText == "Guess HIGHER!"
        }
    }
}