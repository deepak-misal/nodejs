function helloPrinter(){
    console.log("hello");
}
function syncPrinter(){
    while(true){
        console.log("hi")
    }
}
function asyncPrinter(){
    var myWorker = new Worker("worker.js");
    myWorker.postMessage("Worker Started")
}