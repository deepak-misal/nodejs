function makeCustomer(){
    var customer={};
    var _id;
    var _name;
    customer.setId=function(id){
        this._id=id;
    }
    customer.setName=function(name){
        this._name=name;
    }
    customer.getDetails=function(){
        return "Id of customer: "+this._id+"name of customer: "+this._name;
    }
    return customer;
}
var c1=makeCustomer()
c1.setId(101);
c1.setName("abc");
console.log(c1.getDetails())
console.log(c1)