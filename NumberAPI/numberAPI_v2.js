var numberMsg=[];
var message={};
function getXhr(){
    var num=document.getElementById("numberInput").value;
    evenOddBgChanger(num);
    var output;
    var xhr=new XMLHttpRequest()
    xhr.addEventListener("load",function(){
        console.log(xhr.responseText)
        output=xhr.responseText;
        document.getElementById("text").innerHTML=output;
        makeList(output);
         
    })
    xhr.open("GET","http://numbersapi.com/"+num)
    xhr.send();
}
function makeList(output){
    message={
        createdTime: moment().format('MMMM Do YYYY, h:mm:ss a'),
        output,
    }
    numberMsg.push(message);
    storeToLocalStorage(numberMsg);
}
function displayMessages(message){
    var li=document.createElement('li');
    li.appendChild(document.createTextNode(message.output));
    li.appendChild(document.createTextNode(message.createdTime))
    document.getElementById("numbermsgs").prepend(li);
    
}
function storeToLocalStorage(numberMsg){
    localStorage.setItem("numberMessages",JSON.stringify(numberMsg));
}
function evenOddBgChanger(num){
    document.body.style.backgroundColor=(num%2==0)?"red":"yellow";
}

function lastMsgDisplayer(){
    if(!localStorage.getItem("numberMessages")){
        return;
    }
    numberMsg=JSON.parse(localStorage.getItem("numberMessages"));
    for(var i=numberMsg.length-5;i<numberMsg.length;i++){
        displayMessages(numberMsg[i]);
    }
}
