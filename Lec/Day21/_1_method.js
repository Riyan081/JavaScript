
const arr = [1,2,3,4,5];

let print = function(el){
    console.log(el);
}

arr.forEach(print);


let grr=[
    {
    name:"riyan",
    marks:12,
   },
   {
    name:"rajat",
    marks:20,
   }
]

grr.forEach((student)=>{
    console.log(student);
})


//map function 

let num = [4 ,6,7,8,9]

const a = num.map((num)=>{
 return num*num;
})

//filter 

let even = num.filter((num)=>{
  return  num%2 ==0
})
console.log(even);


//Every
// Return true if all elements pass the test else returns false

let s= [1,2,3,4].every((num)=>{
    return num < 5; // All numbers are less than 5, so it returns true
})

console.log(s); // true


//Reduce

let nums = [1,2,3,4,5];

let finalVal = nums.reduce((res,el)=>{
    return res + el; // Sums up all elements in the array
})

console.log(finalVal); // 15

//max value in arra 

let max = arr.reduceRight((max,el)=>{
  if(el > max){
    return el; // Returns the maximum value in the array
  }else{
    return max; // Keeps the current maximum value
  }
})
console.log(max); // 5

// spread - Expand an Iterable in multiple values 

let arrr = [1,2,3,4,5];
console.log(arrr); // [ 1, 2, 3, 4, 5 ]
console.log(...arrr); // 1 2 3 4 5



let char = [...'hello'];
console.log(char); // [ 'h', 'e', 'l', 'l', 'o' ]

const datas = {
   email:"ironman@gmail.com",
    password:"12345"
}

const datacopy = {...datas};
console.log(datacopy); // { email: '

const pp = {...datas, name:"ironman" };
console.log(pp); // { email: '



//rest - Collects all remaining elements into an array
function sum(...args) {
    return args.reduce((acc, el) => acc + el, 0);
}
//acc stands for accumulator, which accumulates the sum of all elements
console.log(sum(1, 2, 3, 4, 5)); // 15



//Destructuring - Extracts values from arrays or properties from objects into distinct 

let names = ['ironman', 'spiderman', 'hulk'];
let [winner,runnerup] = names;
console.log(winner); // ironman
console.log(runnerup); // spiderman

const student = {
  name:"Karan",
  age: 20,
  marks: 90,
  class:9,
  subjects: ['math', 'science', 'english'],
  password: "12345"

}

let username = student.name;
let { age, marks, class: studentClass, subjects } = student;