

const sum = ( a,  b)=>{
 return a + b; // Returns the sum of a and b
}





//settimeout
//settimeout is used for executing a function after a specified delay
console.log("This is a before delayed message");
setTimeout(()=>{
    console.log("This is a delayed message");
},2000); // Executes the function after 2000 milliseconds (2 seconds)
console.log("This is an after delayed message");



//setinterval 
//setinterval is used for executing a function repeatedly at specified intervals

let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    if (count === 5) {
        clearInterval(intervalId); // Stops the interval after 5 counts
        console.log("Interval cleared");
    }
}, 1000); // Executes the function every 1000 milliseconds (1 second)

const student ={
    name:"Riyan",
    age: 20,
    eng:20,
    math:93,
    phy:97,
    getAvg(){
        let avg = (this.eng + this.math + this.phy) / 3; // Using 'this' to access properties of the object
        console.log(`Average marks of ${this.name} is ${avg}`); // Using 'this' to access the name property
    },
    getInfo1: function(){
        setTimeout(()=>{
            console.log(this); // 'this' refers to the student object because arrow functions do not have their own 'this' context
            console.log(`Name: ${this.name}, Age: ${this.age}`); // Accessing properties of the student object
        })
    },

    getInfo2: function(){
        setTimeout(function(){
            console.log(this); // 'this' refers to the global object or undefined in strict mode
        }, 1000);
    }
}


//write a function that prints hello world  5 times at interval if 2s each 

const printintervl =()=>{
    let count = 0;
    let interval = setInterval(()=>{
        count++;
        console.log("Hello World");
        if(count==5){
            clearInterval(interval); // Stops the interval after 5 prints
            console.log("Interval cleared after 5 prints");
        }

    })
}

printintervl(); // Call the function to start printing "Hello World" at intervals of 2 seconds