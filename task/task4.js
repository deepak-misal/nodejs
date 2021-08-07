let task={};
var toDoList=[];

let input=document.querySelector('input');
input.addEventListener('keyup',function(event){
    if(event.key === 'Enter'){
        let details=input.value;
        if(details){
            addToToDoList(details);
        }
    }
});

function addToToDoList(details){
    task={
        isDeleted:false,
        id:Date.now(),
        details,
    };
    toDoList.push(task);
    localStorage.setItem("toDoList",JSON.stringify(toDoList));
    makeList(task);
    console.log(toDoList);
}

function makeList(task){
    var li=document.createElement('li');
    li.appendChild(document.createTextNode(task.details));
    document.getElementById("myLog").prepend(li);
    addButton(li);
}
function addButton(li){
    let btn = document.createElement("button");
    btn.innerHTML = "x";
    btn.addEventListener("click", function () {
        document.getElementById("myLog").removeChild(li);
        task.isDeleted=true;
        btn.remove();
    });
    li.appendChild(btn);
}
window.onload=function(){
    if(!localStorage.getItem("toDoList")){
        return;
    }
    toDoList=JSON.parse(localStorage.getItem("toDoList"));
    for(var i=0;i<toDoList.length;i++){
        if(!toDoList[i].isDeleted){
            makeList(toDoList[i]);
        }
    }
}






