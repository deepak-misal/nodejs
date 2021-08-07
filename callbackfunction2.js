numbers=[2,3,4,5,6];

function squareNo(number){
    return number*number;
}
function cubeNo(number){
    return number*number*number;
}
function add10(number){
    return number+10;
}
function mapNo(arr,method){
    output=[];
    arr.forEach(no=>{
        if(method(no))
            output.push(method(no));
    });
    return output;
}
console.log(mapNo(numbers,add10));
console.log(mapNo(numbers,squareNo));