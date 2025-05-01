// for (let i = 2; i <= 20; i++) {
//     if (i % 2 === 0) {
//         console.log(i + " ");
//     } else {
//         continue;
//     }
// }

let result;
let factorial = 1;
let number = 5;

// while (number >= 1) {
//     factorial *= number;
//     number--;
// }

// console.log(factorial);

for (let i = 1; i <= number; i++) {
    factorial *= i
}
 console.log(factorial)