function doSomething(input){
    var result=Math.random()*input;
    console.log(result)
    if(result>5){
        return{ success: result};
    }
    return{error:"something wrong"};
}
console.log(doSomething(10))
console.group("end")