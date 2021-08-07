function getData(input){
    return new Promise(function(resolve,reject){
        console.log("inside prmoise")
        var output;
        var xhr=new XMLHttpRequest()
        xhr.addEventListener("load",function(){
        output=xhr.responseText;
        if(output){
            resolve({success:output});
            return;
        }
        if(output!=""){
            reject({error:"something went wrong"})
            return;
        }
        
        })
        xhr.open("GET","http://numbersapi.com/"+input)
        xhr.send();
    })
}
getData(2)
        .then(function(output){
            console.log("msg",output)
        })
        .catch(function(error){
            console.log("error",error)
        })
console.log("end")
