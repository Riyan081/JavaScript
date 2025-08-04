//async function bydefault returns promise

async function greet() {
  return "hello nigga";
}
greet();

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
       resolve(num);
    },1000);

   
  });
}


async function demo(){
  let res =  await getNum();
  console.log("value captured by resolve",res);
   console.log("yo nigga");

}

demo();

//handeling rejections
h1 = document.querySelector("h1");

function changecolor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*5)+1;
            if(num>3){
              reject("promise rejected");
            }

            h1.style.color = color;
            console.log(`color changed to ${color}`);
            resolve("color chaned");
        },delay);
    });
}


async function demo(){
    try{
    await changecolor('red',1000);
    await changecolor('blue',1000);
    await changecolor('green',1000);
    await changecolor('pink',1000);
    } catch(err){
        console.log("caught",err);
    }


// let wala ye print he ne hoga vaii 
  //  let a = 5;
    //console.log.og(a);
}

demo();


//what is json 
//java script object notation 

//access data from json
// JSON.parse(data) to parse a string data into js object
// jSON.stringify(json) to parse js object into json


//Ajax
//Asynchronous Javascript and xml

//http verbs 
//get post patch delete

//stats codes
//200 - ok
//404 - Not found
//400 - bad request
//500 - Internal server error 







