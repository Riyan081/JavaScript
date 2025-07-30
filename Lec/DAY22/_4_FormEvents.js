let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    let name = document.querySelector("input").value;
    
    console.log("Form submitted!");
    console.log("Name:", name);
  

    // Optionally, you can clear the form fields after submission
    form.reset();
});