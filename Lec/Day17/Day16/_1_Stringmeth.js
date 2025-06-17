let message = "Hello, World!    ";

message.trim(); // Removes whitespace from both ends

message.toLowerCase(); // Converts to lowercase
message.toUpperCase(); // Converts to uppercase
message.indexOf("World"); // Returns the index of "World" in the string
message.replace("World", "JavaScript"); // Replaces "World" with "JavaScript"
message.split(", "); // Splits the string into an array at ", "
message.startsWith("Hello"); // Checks if the string starts with "Hello"
message.endsWith("!"); // Checks if the string ends with "!"
message.includes("World"); // Checks if "World" is in the string
message.length; // Returns the length of the string
message.charAt(0); // Returns the character at index 0
message.slice(0, 5); // Extracts a substring from index 0 to 5
message.concat(" How are you?"); // Concatenates another string
message.split(" "); // Splits the string into an array of words
message.lastIndexOf("o"); // Returns the last index of "o" in the string
message.repeat(2); // Repeats the string 2 times
message.search("World"); // Searches for "World" and returns its index
message.match(/o/g); // Returns an array of all occurrences of "o"


console.log(message.slice(0, 3)); // Outputs "Hel"


let msg = "help!";
msg.trim().toUpperCase(); // Outputs "HELP!"

let name = "ApnaCollage";

name.slice(4,9); // Outputs "Colla"

name.replace("Apna", "My"); // Outputs "MyCollage"