// Arrays
const array = [1, 2, 3, 7, 10]
const array2 = ['apple', 'orange', 'watermelon']
const array3 = [3, 'orange', true, 'watermelon']

[1, 2, 3, 7, 10]
// 0 1 2 3 4
array[3] = 7
array[5] // undefined

// Them phan tu vi tri cuoi mang
array.push(12)
console.log(array)

// Xoa phan tu vi tri cuoi mang
array.pop()
console.log(array)

// Them phan tu vi tri dau mang
array.unshift(100)
console.log(array)

// Xoa phan tu vi tri dau mang
array.shift()
console.log(array)

for (let i = 0; i < array.length; i++) {
    console.log(array[i])
}

for (const item of array) {
    console.log(item)
}

array.forEach(function(item) {
    console.log(item)
})
