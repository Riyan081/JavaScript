

// let p = document.querySelector("p");

// p.addEventListener("click", function(){
//     console.log("Paragraph clicked!");
  
// });

// let box = document.querySelector(".box");

// box.addEventListener("mouseenter", function(){
//     console.log("Mouse entered the box area!");
//     box.style.backgroundColor = "lightblue"; // Change background color on mouse enter
// })

let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changecolor(){
    this.style.backgroundColor = "lightblue"; // Change background color on mouse enter
}

btn.addEventListener('click', changecolor);
p.addEventListener('click', changecolor);
h1.addEventListener('click', changecolor);
h3.addEventListener('click', changecolor);

