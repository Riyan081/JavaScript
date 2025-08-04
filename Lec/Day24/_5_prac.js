function changeColor(color, delay) {
  new Promise((resolve,reject) => {

    setTimeout(() => {
      h1.style.color = color;
      resolve("colorchanges")
    }, delay);

  });
}


changeColor(red,1000)
.then(()=>{
    console.log("red clolr was completed");
    return changeColor("orange ",1000);
})
.then(()=>{
    console.log("orange color is completed");
    
})