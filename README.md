# 🎯 Number Guessing Game | Day 25 – Veda Technology Internship

A simple and interactive Number Guessing Game built using HTML, CSS, and JavaScript. The player tries to guess a randomly generated secret number between 1 and 100 with helpful higher or lower hints.

## ✨ Features

- Random secret number between 1 and 100
- Higher and lower hints after each guess
- Attempt counter to track valid guesses
- Input validation for empty, invalid, and out-of-range values
- Winning message when the correct number is guessed
- Play Again button to start a new game
- Enter key support for submitting a guess
- Responsive design for desktop and mobile devices

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript

## 📂 Project Structure

```text
Number-Guessing-Game/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run the Project

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in your browser.
4. Enter a whole number between 1 and 100.
5. Click **Check Guess** or press Enter.
6. Follow the hints until you guess the correct number.
7. Click **Play Again** to start a new game.

## 🎮 How to Play

- If your guess is smaller than the secret number, the game displays a higher hint.
- If your guess is larger than the secret number, the game displays a lower hint.
- If your guess is correct, you win!
- The attempt counter increases only for valid guesses.

## 🧠 How It Works

1. JavaScript generates a random number using `Math.random()` and `Math.floor()`.
2. The user's input is validated.
3. Conditional statements compare the guess with the secret number.
4. The game displays a hint or a winning message.
5. The attempt counter updates after each valid guess.
6. The Play Again button resets the game with a new number.

## 📚 Learning Outcomes

This project helped me practice JavaScript random number generation, conditional statements, functions, DOM manipulation, input validation, keyboard events, and game-state management.

## 👨‍💻 Internship Details

- **Day:** 25
- **Program:** Web Development Internship
- **Organization:** Veda Technology
