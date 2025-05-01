// Exercise: Array Manipulation
//  1. Create an array called 'cities' containing at least 5 different city names.
//  2. Use console.log to display the second city int the array
//  3. Add a new city to the end of the array
//  4. Remove the first city from the array
//  5. Display the updated items of that array onen-by-one

cities = ['DN', 'H', 'HN', 'SG', 'HP']

// 2.
console.log(cities[1]);

// 3.
cities.push('QNam');
console.log(cities);
// 4. 
cities.shift();
console.log(cities);

// 5.
cities.forEach(function(item) {
    console.log(item);
})

for (const city of cities) [
    console.log(city)
]