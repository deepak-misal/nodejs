nos=[10,20,30,41,51];

function isOdd(number){
    return (number%2!=0);
}
function numberGreaterThan25(number){
    return (number>25);
}

function filterNos(arr,method){
    odd=[];
    for(i=0;i<arr.length;i++){
        if(method(arr[i]))
            odd.push(arr[i]);
    }
    return odd;
}
console.log(filterNos(nos,isOdd));
console.log(filterNos(nos,numberGreaterThan25));