
// onclick() = 

let btn = document.querySelector("button");


btn.onclick = function(){

    alert("Button clicked!");
}

btn.onmouseenter = function(){
    console.log("Mouse entered the button area!");
}

//Event Listners


btn.addEventListener("click", function(){
    alert("Button clicked using addEventListener!");
})

btn.addEventListener("doubleclick",function(){
    alert("Button double clicked!");
})