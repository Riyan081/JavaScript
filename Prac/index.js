//call back hell
// let h1 = document.querySelector('h1');

// function colorchange(color,time,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color = color;
//         nextColorChange();
//     },time);
// }


// colorchange("red",1000,()=>{
//     colorchange("green",1000,()=>{
//         colorchange("pink",1000);
//     })

// })


// function saveDb(data,sucess,failure){
//     let internetspeed = Math.floor(Math.random()*10)+1;
//     if(internetspeed>4){
//         sucess();
//     } else{
//         failure();
//     }
// }

// saveDb("first try",()=>{
//     console.log("first try sucess");
//     saveDb("second try",()=>{
//         console.log("second try also sucess lets go");
//         saveDb("third try",()=>{
//             console.log("third try also sucess");
//         },()=>{
//             console.log('thirs try failed');
//         })
//     }, ()=>{
//         console.log("second try failed");
//     });
// },()=>{
//     console.log("your data didnt get stored");
// })


function savedb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed = Math.floor(Math.random()*9)+1;
        if(internetSpeed > 3){
            resolve();
        } else{
            reject();
        }
    })
}

const request = saveDb("hi there")
.then(()=>{
console.log("hogya vaii");
  saveDb("second try");
})
.then(()=>{
    console.log("nice");
})
.catch(()=>{
    console.log("error occur haahn");
})
