
document.getElementById('list').addEventListener('click',fetchData);
function fetchData(){
    fetch('empdata.csv')
    .then(function(response){
        return response.text();
    })
    .then(function(data){
        storeInList(data)
        
    })
}

function storeInList(data){
    var employeeObj=[];
    var lines=data.split('\n');
    var headers=lines[0].split(',');
    for(var i=1;i<lines.length;i++){
        var rowdata=lines[i].split(',');
        employeeObj[i]={};
        for(var j=0;j<rowdata.length;j++){
            employeeObj[i][headers[j]]=rowdata[j];
        }
    }
    removeDuplicates(employeeObj) 
}

function removeDuplicates(employeeObj){
    var setObj = new Set(); 

    var uniqueEmployees = employeeObj.reduce((employee,item)=>{
    if(!setObj.has(item.ID)){
        setObj.add(item.ID,item)
        employee.push(item)
    }
  return employee;
},[]);
displayTable(uniqueEmployees);   
}

function displayTable(uniqueEmployees){
    var table = "<table border='1|1' >";
    for (var i = 0; i < uniqueEmployees.length; i++) {
        table+="<tr>";
        table+="<td>"+uniqueEmployees[i].ID+"</td>";
        table+="<td>"+uniqueEmployees[i].NAME+"</td>";
        table+="<td>"+uniqueEmployees[i].DESIGNATION+"</td>";
        table+="<td>"+uniqueEmployees[i].MANAGERID+"</td>";

        table+="</tr>";

    }
    table+="</table>";
    document.getElementById("data").innerHTML = table;
    console.log(buildHierarchy(uniqueEmployees))
}
function buildHierarchy(uniqueEmployees){
    //  var root=[];
    //  var children={};
    //  for (var i = 0, len = uniqueEmployees.length; i < len; ++i) {
    //     var employee = uniqueEmployees[i],
    //     p = employee.MANAGERID,
    //     target = (p=='NULL') ? root : (children[p] || (children[p] = []));

    //     target.push({ value: employee });
    // }s
    // console.log(root)
    // console.log(children)
    var root=[];
    for(var i = 0, len = uniqueEmployees.length; i < len; ++i){
        var employee=uniqueEmployees[i]
        if(employee.MANAGERID=='NULL'){
            root.push(employee);
        }
    }
    console.log(root[0].NAME)
    document.getElementById("root").innerHTML=root[0].NAME;
    var rootId=root[0].ID;
    var level1=[]
    for(var i = 0, len = uniqueEmployees.length; i < len; ++i){
        var employee=uniqueEmployees[i]
        if(employee.MANAGERID==rootId){
            level1.push(employee)
        }
    }
    console.log(level1)
    var level2=[];
    for(var i = 0, len = uniqueEmployees.length; i < len; ++i){
        var employee=uniqueEmployees[i]
        if(employee.MANAGERID==level1[i].ID){
            level2.push({value:employee})
        }
    }
    console.log(level2)
}

