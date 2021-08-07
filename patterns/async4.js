function doSomething(input){
    return new Promise(function(resolve,reject){
        console.log("inside prmoise")
        var result=Math.random()*input;
        console.log(result)
        if(result>5){
            resolve({success:result});
            return;
        }
        reject({error:"something went wrong"})
    })
}
doSomething(10)
            .then(function(result){
                console.log("success happened ",result)
            })
            .catch(function(error){
                console.log("error happened ",error)
            });
console.log("end");