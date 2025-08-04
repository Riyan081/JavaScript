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
request
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
request
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

