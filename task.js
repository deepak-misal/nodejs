window.console = {
    log: function(str){
        var node = document.createElement("ul");
        node.appendChild(document.createTextNode(str));
        document.getElementById("myLog").prepend(node);
        let btn = document.createElement("button");
        btn.innerHTML = "x";
        btn.addEventListener("click", function () {
            document.getElementById("myLog").removeChild(node);
            btn.remove();
          });
        document.getElementById("myLog").prepend(btn);
    }
}

var taskNo=0;
let task = document.querySelector('input');
task.addEventListener('keyup', function(e) {
    if (e.keyCode===13)
        console.log(e.target.value);
        taskNo++;
        localStorage.setItem(taskNo,e.target.value);
        
        
    for(let i=0;i<localStorage.length;i++){
        key=0;
        key=localStorage.key(i);
        localStorage.getItem(key);
    }
        
})
