let todo = [];

let req = prompt("Enter your request");

while(true){

    if(req=="quit"){
    console.log("You quit the app");
    break;
    }

    if(req=="list"){
        console.log("**********");
       for(let i=0;i<todo.length;i++){
        console.log(i,todo[i]);
       }
        console.log("************");
    } 
else
    if(req=="add"){
        let task = prompt("enter a task you want to execute");
        todo.push(task);
        console.log("task added successfully");

    } else 
    
    if(req=="delete"){
        let idx = prompt("enter the task index");
        todo.splice(idx,1);
    }
    else{
        console.log("Invalid request, please try again");
        console.log("Available requests: list, add, delete, quit");
    }

    

    req = prompt("please enter your request");
}

