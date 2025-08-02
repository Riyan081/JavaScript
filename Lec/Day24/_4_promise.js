

function saveDb(data){
    return new Promise((resolve,reject)=>{
        let internetspeed=  Math.floor(Math.random()*10)+1;
        if(internetspeed > 4){
            resolve("data was saved");
        }else{
            reject('weak connection');
        }
    });

}

saveDb('yo');