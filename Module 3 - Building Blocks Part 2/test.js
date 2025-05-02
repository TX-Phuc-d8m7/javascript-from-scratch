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

// 1. Global context
traditionalFunction();
arrowFunction();

// 2. As methos of an object
myObject.traditionalMethod()
myObject.arrowMethod();
