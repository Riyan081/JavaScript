//socho div ke andhar li ul wagera hai to when we clikd on div only dic ka event listner call hota hai but when we click on inner element like li or ul unse dic ka bhe even listner call hota hia 

const div = document.querySelector("div");
const ul = document.querySelector("ul");
const li = document.qquerySelector("li");


div.addEventListner("click",function (){
    console.log("divv was clicked")
})

ul.addEventListner("click",function (event){
    event.stopPropagation(); // this stops this event bubbeling 
    console.log("ul was clicked")
})


li.addEventListner("click",function (event){
    event.stopPrapogation();
    console.log("ul was clicked")
})