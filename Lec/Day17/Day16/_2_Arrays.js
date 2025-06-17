let marks = [10, 20, 30, 40, 50];

// Accessing elements
console.log(marks[0]); // Outputs 10
console.log(marks[1][0]); // Outputs 2 (if marks[1] is an array, e.g., [20, 2])

// Modifying elements
marks[0] = 15; // Changes the first element to 15
console.log(marks); // Outputs [15, 20, 30, 40, 50]

// Adding elements
marks.push(60); // Adds 60 to the end of the array
console.log(marks); // Outputs [15, 20, 30, 40, 50, 60]


// Removing elements
marks.pop(); // Removes the last element (60)
console.log(marks); // Outputs [15, 20, 30, 40, 50]


// Finding the length of the array
console.log(marks.length); // Outputs 5


// Iterating through the array
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]); // Outputs each element
}


// Checking if an element exists
console.log(marks.includes(30)); // Outputs true (30 is in the array)


// Finding the index of an element
console.log(marks.indexOf(40)); // Outputs 3 (index of 40)


// Slicing the array
let slicedMarks = marks.slice(1, 4); // Gets elements from index 1 to 3
console.log(slicedMarks); // Outputs [20, 30, 40]


// Splicing the array work directly on original array
// Splicing the array
marks.splice(2, 1); // Removes 1 element at index 2 (30)
console.log(marks); // Outputs [15, 20, 40, 50]


// Concatenating arrays
let moreMarks = [70, 80];
let allMarks = marks.concat(moreMarks); // Combines marks and moreMarks
console.log(allMarks); // Outputs [15, 20, 40, 50, 70, 80]


// Reversing the array
marks.reverse(); // Reverses the order of elements
console.log(marks); // Outputs [50, 40, 20, 15]


// Sorting the array
marks.sort((a, b) => a - b); // Sorts the array in ascending order
console.log(marks); // Outputs [15, 20, 40, 50]

// Finding the maximum and minimum values
let maxMark = Math.max(...marks); // Finds the maximum value
console.log(maxMark); // Outputs 50


let start = ['januay','february','march','august'];


start.shift(); // Removes the first element (januay)
start.shift(); // Removes the next first element (february)
start.unshift('june'); // Adds 'june' to the beginning of the array
start.unshift('july'); // Adds 'july' to the beginning of the array
console.log(start); // Outputs ['july', 'june', 'march', 'august']


start.includes('july'); // Checks if 'july' is in the array

start.indexOf('june'); // Finds the index of 'june' (0 in this case)


start.concat(['september', 'october']); // Combines with another array

start.reverse(); // Reverses the order of elements
start.sort(); // Sorts the array in alphabetical order

let month = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];
month.slice(1, 3); // Gets elements from index 1 to 2 (february, march)



s=['january','july','march','august'];
// change s to a 
a = ['july','june','march','august'];

s.splice(0,2) // Removes the first two elements (january, july)
s.splice(0, 0, 'june'); // Adds 'june' at the beginning of the array
s.splice(0, 0, 'july'); // Adds 'july' at the beginning of the array