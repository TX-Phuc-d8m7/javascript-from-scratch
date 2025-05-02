// Destructuring, Spread & Rest

const person = {
    name: "Xuan Phuc",
    age: 21,
    city: "Da Nang"
}

const {name, age} = person
console.log(name)
console.log(age)

// This also work on array

const fruits = ["apple", "banana", "orange"]
const {firstFruit, secondFruit} = fruits

console.log(firstFruit)
console.log(secondFruit)


// 2. Spread & 3. Rest
const defaults = {color: "blue", size: "medium"}
const product = {... defaults, price: 10, name: "T-shirt"}
console.log(product) // {color: "blue", size: "medium, price: 10, name: "T-shirt" }

// Spread on Arrays
const numbers = [1, 2, 3]
const more_numbers = [...numbers, 4,5]
console.log(more_numbers)


// Rest
const sum = (a, b) => {
    return a + b
}

const sum2 = (...numbers) => {
    let total = 0;
    numbers.forEach(number => total += number)
    return total;
}

console.log(sum2(1,2)) // 3
console.log(sum2(1, 2, 3)) // 6
console.log(sum2(1, 2, 3, 4, 5)) // 15