

let student = {
    name:'John Doe',
    age: 20,

}

let twitter = {
    username:"ren ",
    content :["music", "art", "coding"],
    likes:100,
    retweets:50,
    tags: ["#music", "#art", "#coding"],
    isVerified: true,
}

twitter.username = "ren_ren"; // Modifying the username
console.log(twitter.username); // Outputs "ren_ren"


twitter.content.push("gaming"); // Adding a new content type


delete twitter.likes; // Removing likes property

twitter['followers'] = 5000; // Adding a new property
console.log(twitter.followers); // Outputs 5000
console.log(twitter.likes); // Outputs undefined (since likes is deleted)

console.log(twitter.content); // Outputs ["music", "art", "coding", "gaming"]

console.log(twitter); // Outputs ["music", "art", "coding", "gaming"]

//js auto converts object into string when concatenating
//if we make the number as a key the number will be cinverted to the string 



let student1 ={
    name:"riyan",
    age:23,
    marks:94.4,
    city:"Dhaka"

}

console.log(student1.city)// Accessing properties

student1.age = 24; // Modifying a property
console.log(student1.age); // Outputs 24


student1.gender  = "male";
console.log(student1.gender); // Outputs "

delete student1.city; // Deleting a property
console.log(student1.city); // Outputs undefined (since city is deleted)




//nested objects
const classInfo= {
    aman:{
        name: "Aman",
        age: 22,
        subjects: ["Math", "Science"]
    },
    riyan: {
        name: "Riyan",
        age: 23,
        subjects: ["English", "History"]
    },
    john: {
        name: "John",
        age: 21,
        subjects: ["Physics", "Chemistry"]
    }
}

//array of objects

const students = [
    {

        name: "Aman",
        age: 22,
        subjects: ["Math", "Science"]
    },
    {
        name: "Riyan",
        age: 23,
        subjects: ["English", "History"]
    },
    {
        name: "John",
        age: 21,
        subjects: ["Physics", "Chemistry"]
    }
]

students[0].intrests = ["coding", "gaming"]; // Adding a new property to the first student
console.log(students[0].intrests); // Outputs ["coding", "gaming"]



//Math Objects
//Properties                       methods
// Math.PI                         Math.abs(x) - Returns the absolute value of x
// Math.E                          Math.ceil(x) - Rounds x up to the nearest integer
                             //    Math.pow(base, exponent) - Returns base raised to the power of exponent
                             //    Math.floor(x) - Rounds x down to the nearest integer
// Math.SQRT2                      Math.sqrt(x) - Returns the square root of x
// Math.SQRT1_2                    Math.random() - Returns a random number between


Math.abs(-5); // Returns 5
Math.ceil(4.2); // Returns 5
Math.floor(4.8); // Returns 4
Math.floor(-5.5); // Returns -6
Math.pow(2, 3); // Returns 8 (2 raised to the power of
Math.random(); // Returns a random number between 0 (inclusive) and 1 (exclusive)

//generate random number

let number  = Math.randon() * 10; // Generates a random number between 0 and 10
number = Math.floor(number); // Rounds down to the nearest integer
console.log(number); // Outputs a random integer between 0 and 9


//gen random no between 1 to 100 

let num = Math.floor(Math.random() * 100) + 1; // Generates a random number between 1 and 100
console.log(num); // Outputs a random integer between 1 and 100



//User enters a max number then triews to guess a random number between 1 to max number

let max = prompt("Enter a maximum number: ");
console.log(max); // Outputs the maximum number entered by the user

const random = Math.floor(Math.random() * max) + 1; // Generates a random number between 1 and max
let guess = prompt("Guess a number between 1 and " + max + ": ");

while(true){

    if(guess == "quit"){
        console.log("Game Over");
        break;
    }

    if(guess ==random){
        console.log("Congratulations! You guessed the number: " + random);
        break;
    } 
    else{
      guess =  prompt("Wrong guess! Try again or type 'quit' to exit: ");
    }


}

