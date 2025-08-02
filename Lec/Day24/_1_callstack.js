function one(){
    return 1;
}

function two(){
    return one()+one();
}

function theree(){
    let ans =  two()+one();
    console.log(ans);
    
}

theree();

