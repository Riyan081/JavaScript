
//method in objecct cannot directly access the method variables


const student = {
    name:"Riyan",
    age: 20,
    eng:20,
    math:93,
    phy:97,
    getAvg(){
        let avg = (this.eng + this.math + this.phy) / 3; // Using 'this' to access properties of the object
        console.log(`Average marks of ${this.name} is ${avg}`); // Using 'this' to access the name property
    }
}

student.getAvg(); // Outputs "Average marks of Riyan is 70"