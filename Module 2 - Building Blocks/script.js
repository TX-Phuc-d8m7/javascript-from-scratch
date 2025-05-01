// Variable Naming Best Practices

// Allowed & Best Practice
let user;
let firstName; // Camel Case
let result; // Choose the meaninful name that clearly describe what the variable is about
let firstName2;
// let name = 'John';
// let age = 20;

// Not Allowed / Not Recommended
var apple;
let firstname; // Snake Case
let a; // Not clear
// let 2firstName; // Cannot start variable name with a number
// let let; - Can not use keyword to named a variable
let name = 'John', age = 20;


const firstNumberInput = document.getElementById('firstNumber');
const secondNumberInput = document.getElementById('secondNumber');
const operatorSelectInput = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultParagraph = document.getElementById('result');

function greet() {
    console.log("Hello, I'm TXP");
}

greet();

// Function Types
// 1. Perform a specific task
// 2. Return a result

function calculate() {
    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);
    const operator = operatorSelectInput.value;
    console.log(typeof parseFloat(firstNumber))

    // Operators
    let result;

    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        resultParagraph.textContent = 'Please enter a valid number';
        return;
    }

    // if (operator === '+') {
    //     result = firstNumber + secondNumber;
    // } else if (operator === '-') {
    //     result = firstNumber - secondNumber;
    // } else if (operator === '*') {
    //     result = firstNumber * secondNumber;
    // } else if (operator === '/') {
    //     if(secondNumber === 0) {
    //         resultParagraph.textContent = "Division by zero is not allowed";
    //         return;
    //     }
    //     result = firstNumber / secondNumber;
    // } else {
    //     result = "Invalid operator"; 
    // }

    switch (operator) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            if(secondNumber === 0) {
                resultParagraph.textContent = "Division by zero is now allowed";
                return;
            }
            result = firstNumber / secondNumber;
            break;
        default:
            result = 'Invalid operator';
    }

    // Conditionals
    
    console.log(result);
    resultParagraph.textContent = "Result: " + result;
}

calculateButton.addEventListener('click', calculate);



// SWITCH STATEMENTS

