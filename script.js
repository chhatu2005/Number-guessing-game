
let targetNumber = Math.floor(Math.random() * 100) + 1
let attemptCount = 0
let gameOver = false

const guessInput = document.getElementById("guessInput")
const guessBtn = document.getElementById("guessBtn")
const message = document.getElementById("message")
const attempts = document.getElementById("attempts")
const playAgainBtn = document.getElementById("playAgainBtn")

const checkGuess = () =>
{
    if(gameOver)
    {
        return
    }

    const guess = Number(guessInput.value)

    if(guessInput.value.trim() === "" || !Number.isInteger(guess) || guess < 1 || guess > 100)
    {
        message.innerText = "Please enter a whole number between 1 and 100"
        return
    }

    attemptCount++
    attempts.innerText = attemptCount

    if(guess === targetNumber)
    {
        message.innerText = "Correct You guessed the number"
        gameOver = true
        guessBtn.disabled = true
        guessInput.disabled = true
        playAgainBtn.hidden = false
    }
    else if(guess < targetNumber)
    {
        message.innerText = "Too low Try a higher number"
    }
    else
    {
        message.innerText = "Too high Try a lower number"
    }

    if(!gameOver)
    {
        guessInput.value = ""
        guessInput.focus()
    }
}

const playAgain = () =>
{
    targetNumber = Math.floor(Math.random() * 100) + 1
    attemptCount = 0
    gameOver = false

    attempts.innerText = 0
    message.innerText = "New game Make your guess."
    guessInput.value = ""
    guessInput.disabled = false
    guessBtn.disabled = false
    playAgainBtn.hidden = true
    guessInput.focus()
}

guessInput.addEventListener("keydown", (event) =>
{
    if(event.key === "Enter")
    {
        checkGuess()
    }
})

