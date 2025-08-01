const btn = document.querySelector("button");
const ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", () => {
  let li = document.createElement("li");
  li.innerText = input.value;

  let btn = document.createElement("button");
  btn.innerText = "delete";
  btn.classList.add("delete"); // class name dediya btn ko
  li.appendChild(btn);

  ul.appendChild(li);
  input.value = "";
});

// const delbtns = document.querySelectorAll(".delete");
// for( delbtn of delbtns){
//     delbtn.addEventListener("click",function(){
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }

//Event delongation

ul.addEventListener("click", function (event) {
  //    console.log(event.target.nodeName);//showa kiske wajese ye triger hua

  if (event.target.nodeName == "BUTTON") {
    let listitem = event.target.parentElement;
    listitem.remove();
  
  }
});
