// Exercise: Applying Destructuring, Spread, and Rest

// 1. Create an object representing a student with properties
    const student = {
        student_name: 'Xuan Phuc',
        age: 21,
        grade: 13,
        favourite_subject: ['Math', 'History', 'Physic']
    }

// 2. Use destructuring to extract the 'name' and 'grade' properties into variables
    const {student_name, grade} = student
    console.log(student_name)
    console.log(grade)

// 3. Create a new object representing another student,
    // using the spread operator to copy some properties from the first student and adding new 
    const second_student = {...student, favourite_food: 'sandwich'}

// 4. Write a function that takes a variable number of arguments
    // using the rest operator and calculates their average

    const average_result = (...nums) => {
        let total = 0;
        nums.forEach(num => total += num)
        return sum/(nums.length)
    }

    console.log(average_result(1,3,5,7,9))
    