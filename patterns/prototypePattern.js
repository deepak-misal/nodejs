function Customer(id,name){
    this.name=name;
    this.id=id;
}
Customer.prototype.getDetails=function(){
    return ("Id of customer: "+this.id+"Name of Customer: "+this.name);
}
var c1=new Customer(101,'abc');
var c2=new Customer(102,"pqr");
console.log(c1)
console.log(c2)
console.log(c1.getDetails())
console.log(c2.getDetails())
console.log(c1.__proto__==Customer.prototype)
console.log(c2.__proto__==Customer.prototype)
console.log(c1.__proto__==c2.__proto__)
console.log(Customer.prototype.__proto__==Object.prototype)
console.log(Object.prototype.__proto__)
var obj={};
console.log(obj.__proto__)
Object.prototype.foo=function(){
    return"I am Foo";
}
console.log(c1.foo())