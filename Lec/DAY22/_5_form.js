let form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    // Get all form values
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let phone = document.getElementById("phone").value;
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    
    // Basic validation
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters long!");
        return;
    }
    
    // Log all form data
    console.log("Form submitted successfully!");
    console.log("First Name:", firstName);
    console.log("Last Name:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Age:", age);
    console.log("Gender:", gender);
    
    // Create user object
    let userData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        age: age,
        gender: gender
    };
    
    console.log("User Data Object:", userData);
    
    alert("Registration successful!");
    
    // Clear the form fields after submission
    form.reset();
});