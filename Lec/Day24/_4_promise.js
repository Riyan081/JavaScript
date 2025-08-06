function saveDb(data) {
  return new Promise((resolve, reject) => {
    let internetspeed = Math.floor(Math.random() * 10) + 1;
    if (internetspeed > 4) {
      resolve("data was saved");
    } else {
      reject("weak connection");
    }
  });
}

//this is promise then catch
let request = saveDb("yo");
request
  .then(() => {
    console.log("promise was resolved ");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
console.log(request);

//promise chaining

let requests = saveDb("yo");
requests
  .then(() => {
    console.log("promise was resolved data 1 ");
    return saveDb("helloworld");
  })
  .then(() => {
    console.log("data 2 saved");
  })
  .catch(() => {
    console.log("promise was rejected");
  });
console.log(request);


let requests2 = saveDb("yo");
requests2
  .then((result) => {
    console.log("promise was resolved data 1 ");
    console.log("result",result); //result data was saved
    return saveDb("helloworld");
  })
  .then((result) => {
    console.log("data 2 saved");
    console.log(result);
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log(error);
  });
console.log(request);



//abhi main eitne sare function like hia na so pehle na dono alag alg fun ke first then call honge first fun c ka then thhen second fun ka then badme first fun ka 2nd then and second fun ka 2nd then 

// All 3 promises start at the SAME TIME
//let request = saveDb("yo");     // Promise 1 starts
//let requests = saveDb("yo");    // Promise 2 starts  
//let requests2 = saveDb("yo");   // Promise 3 starts

// Then execution happens like this:
// First .then() of all promises execute first (whichever resolves first)
// Then second .then() of promises that have them