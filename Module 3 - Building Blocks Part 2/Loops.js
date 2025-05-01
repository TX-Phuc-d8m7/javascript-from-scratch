// Loops in JavaScript
for (let i = 0; i < 10; i++) {
    console.log("Hello Work");
}

// While 
let count = 10;
while (count > 0) {
    console.log(count);
    count--;
}

// do ... while
do {

} while (count > 0)


// Infinite loops
for (let i = 0; i>=0 ; i++) {
    console.log("Hello Work");
}


// for ... in - properties of an object
// for ... of - values of an array / iterable object

// break & continue
for (let i = 0; i < 10; i++) {
    console.log(i);
    if (i === 5) {
        console.log('Stopping the loop at 5');
        break;
    }
}

// LOOPS EXERCISES

// 1. Print even numbers
    // Write a loop that prints all even numbers from 2 to 20.

for (let i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + " ");
    }
}

// 2. Calculate Factorial:
    // Write a loop to calculate the factorial of a given number
    // 5! = 5*4*3*2*1 = 120

let result;
for (let i = 1; i <=n; i++) {
    result *= i;
}
console.log("Result: " + result);


// 3. Guess the number game
    // Create a simple game where the user has to guess a randomly generated number
    // User a loop to keep asking for guess until the get it right.
const secretNumber = Math.floor(Math.random() * 100)
let guessedNumber = 20;

do {
    if (guessedNumber < secretNumber) {
        console.log("Too slow")
    } else if (guessedNumber > secretNumber) {
        console.log("Too high")
    } else {
        console.log("Congrats! You guessed the number");
    }
} while(guessedtNumber === secretNumber)