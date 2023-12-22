const words = ["THREE", "SANTA", "SNOW", "WINTER", "STAR", "CHRISTMAS", "GIFTS"];
const validLetters = /[A-Z]/;
const word = words[Math.floor(Math.random() * words.length)];
const guessedLettersArray =[];
let attempts = 7;
let userAnswerArray = [];

for(let i = 0; i < word.length; i++) {
    userAnswerArray[i] = " _ ";
}

let remainLetters = word.length;

while (remainLetters > 0 && attempts > 0) {

    const guessLetter = prompt(
        "Welcome to the Hangman game. \n\n" +
        "Type an capitalized letter to guess the word. \n" +
        "The current word is: " + userAnswerArray.join(" ") + "\n" +
        "You got "+ attempts + " remaining lifes "
    );

    if (guessLetter === null) {
        alert("You choosed to cancel the game \nand it's now cancelled! \nByebye");
        break;
    } else if (guessLetter.length !== 1 || !validLetters.test(guessLetter)) {
        alert("Invalid - Please enter only one letter and it must be capitalized!");
    } else if (guessedLettersArray.includes(guessLetter)) {
        alert("You have already guessed this letter " + guessLetter + ". Try another letter!")
    } else if (!word.includes(guessLetter)) {
        alert("Wrong letter! now you only have " + --attempts);
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guessLetter) {
                userAnswerArray[j] = guessLetter;
                remainLetters--;
            }
        }
        guessedLettersArray.push(guessLetter);
    }
}

if (remainLetters === 0) {
    alert("Congratulations! You've guessed right. \n The answer was " + word);
} else {
    alert("You failed finding the right word! \n You loose. \n\n The correct answer was " + word);
}
