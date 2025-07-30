

const img = document.getElementById("spoidermon");
console.log(img);

//img.setAttribute("src","hye");
console.log(img);


const para = document.getElementById("des")
//para.innerText="nigga yo"
console.log(para.innerText);
console.log(para.innerHTML);
console.log(para.textContent);
console.log(para);


//Manuplate style 
img.style.width = '100vh';

const h = document.querySelector("h2");

h.style.color="green"
h.style.backgroundColor="red"
console.log(h.style);


console.log(img.classList);
              
console.log(h.classList.add("try"));
h.classList.remove("try")
h.classList.contains("try");


//Adding element 

let newp = document.createElement('p')
console.log(newp);

newp.innerText = "Hi there i am ren"
console.log(newp);

let body = document.querySelector('body');
body.appendChild(newp); ///end of body main jayega ye 
//append child se uske andhar chize insert karskte hai 

let paras = document.getElementById("des");
paras.append("i there i am learning append") ///isse sidha usme he append kar skte hai 

let button = document.createElement('button');
button.innerText = "New Button"
console.log(button);

paras.insertAdjacentElement('beforebegin',button);



//remove function 

button.remove();