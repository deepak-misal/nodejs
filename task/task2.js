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

    function addToToDoList(details){
        task={
            isDeleted:false,
            id:Date.now(),
            details,
        };
        toDoList.push(task);
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
        btn.addEventListener("click", function (event) {
            var buttonId=task.id;
            document.getElementById("myLog").removeChild(li);
            task.isDeleted=true;
            btn.remove();
            console.log(buttonId);
        });
        li.appendChild(btn);
    }


})


