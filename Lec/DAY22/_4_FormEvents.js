let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    let name = document.querySelector("input").value;
    
    console.log("Form submitted!");
    console.log("Name:", name);
  

    // Optionally, you can clear the form fields after submission
    form.reset();
});

let inp = document.querySelector("input");

inp.addEventListener("keydown",function(event){
   console.log(event.key);
   console.log(event.code); 
    console.log("key was pressed");
})

//more events
//change event - change event occurs when value of element has been changed only work on input textarea and select elements iise pura change hua to leta like not letters but word

//input elements - the input event fires when the value of an input select or textarea has been changed  ye chote cote change bhe leta like letters

inp.addEventListener('change',function(){
    console.log("input changed");
    console.log(this.value);

})


inp.addEventListener("input",function(){
    console.log(this.value);
})