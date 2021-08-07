function doSomething(input,successCallBackFn,errorCallBackFn){
    setTimeout(function(){
        var result=Math.random()*input;
        console.log(result)
        if(result>5){
            successCallBackFn({ success: result});
        return;
        }
        errorCallBackFn({error:"something wrong"});
        return;

    },0)
    
}

doSomething(10,function(data){
    console.log("success happened:",data)
},function(err){
    console.log("error happened:",err)
})
console.log("end")