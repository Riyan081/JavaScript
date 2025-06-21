
//what is function
// A function is a reusable block of code that performs a specific task.

//what is scope
// Scope refers to the visibility or accessibility of variables and functions in different parts of the code.
// There are two main types of scope in JavaScript: global scope and local scope.
// Global scope: Variables and functions declared outside of any function are in the global scope.
// Local scope: Variables and functions declared inside a function are in the local scope and are not accessible outside that function.


//block scope
// Block scope refers to the scope of variables declared within a block (enclosed by curly braces `{}`), such as in loops or conditionals.

//lexical scope
// Lexical scope means that the scope of a variable is determined by its position in the source code, and nested functions can access variables from their parent scopes.





function hello(){
    console.log("Hello World");
}

hello(); // Calling the function


//function to roll the dise 

function rollldise(){
    return Math.floor(Math.random() * 6) + 1; // Returns a random number between 1 and 6
}

rollldise();


function printinfo(name,age){
    console.log(`Name: ${name}, Age: ${age}`);
}




function numbertable(n){
    for(let i = 1; i <= 10; i++) {
        console.log(`${n} x ${i} = ${n * i}`);
    }
}

//return table 

function sum(a,b){
    return a + b; // Returns the sum of a and b
}

//function that return concatination of all strings in an array 
let str = ["Hello", "World", "from", "JavaScript"];

function concat(str){
    let ar = ""
    for(let i=0;i<str.length;i++){
     ar+= str[i]+" ";
    }
    return ar.trim(); // Returns the concatenated string
}

concat(str); // Outputs "Hello World from JavaScript"

//function expression

let sum = function(a,b,c){
    return a + b + c; // Returns the sum of a, b, and c
}


//higher order functions 
// A higher-order function is a function that takes another function as an argument or returns a function as its result.

function multiplegreet(func,n){
    for(let i = 0; i < n; i++) {
        func(); // Calls the passed function
    }
}

function greet(){
    console.log("Hello!");
}

// Using the higher-order function
multiplegreet(greet, 3); // Outputs "Hello!" three times



//Methods of functions
// Methods are functions that are properties of an object. In JavaScript, functions are first-class objects, meaning they can have properties and methods just like any other object.

let calc = {
    add: function(a,b){
        return a + b; // Returns the sum of a and b
    },
    subtract: function(a,b){
        return a - b; // Returns the difference of a and b
    },
}

// Using the methods of the calc object
console.log(calc.add(5, 3)); // Outputs 8
console.log(calc.subtract(5, 3)); // Outputs 2q