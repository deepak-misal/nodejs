function doSomething(input,successCallBackFn,errorCallBackFn){
    var result=Math.random()*input;
    console.log(result)
    if(result>5){
        successCallBackFn({ success: result});
        return;
    }
    errorCallBackFn({error:"something wrong"});
    return;
}

doSomething(10,function(data){
    console.log("success happened:",data)
},function(err){
    console.log("error happened:",err)
})
console.group("end")