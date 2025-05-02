//  Objects
//  Collection of key - value pairs
    // Keys are usually strings
    // Values can be any data type, including other objects or arrays;
// Perfect for representing real-world entities

//  Creating Objects
const lightBulb = {
    isOn: false,
    color: 'yellow',
    toggle: function() {
        this.isOn = !this.isOn;
    }
}

//  Accessing Object Properties
console.log(lightBulb.isOn)  // false
console.log(lightBulb.toggle()) // undefined
console.log(lightBulb.isOn) // true
console.log(lightBulb['isOn']) // true

const lightBulbColor = 'color'
console.log(lightBulb[lightBulbColor]) // 'yellow'

//  Adding and Modifying Properties
lightBulb.newProperty = false
lightBulb.color = 'orange'



// this KEYWORD 
const myAccount = {
    balance: 1000,
    deposit: function(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    },
    withdraw: function(amount) {
        if(amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdraw ${amount}. New balance: ${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }
}

myAccount.deposit(500)
myAccount.balance // balance: 1500
myAccount.withdraw(200)

function startTimer() {
    console.log("Timer started on " + this); // Timer started on [object global]
    setTimeout(function() {
        console.log("Time's up!");
    }, 3000)
}

startTimer()


// this in Arrow Functions

// Traditional function
function traditionalFunction() {
    console.log(this);
}

// Arrow function
const arrowFunction = () => {
    console.log(this);
}

// Objedt with a method
const myObject = {
    name: "My object",
    traditionalMethod: traditionalFunction,
    arrowMethod: arrowFunction
}

