console.log(this)
function Customer(id ,name){
    console.log(this)
    var _id,_name;
    if(id>0){
        _id=id;
    }
    if(name.length>0){
        _name=name;
    }
    this.foo="I am a foo, just to test"
    this.setName=function(name){
        if(name.length>0){
            _name=name;
        }
    }
    this.getName=function(name){
        return _name;
    }
    this.getId=function(id){
        return _id;
    }
}
var c1=new Customer(101,"deepak");
console.log(c1)
console.log({c1})
c1.setName("abc")
console.log({c1})
console.log(c1.getName())
console.log(c1.getId())
console.log(c1.foo)
console.log({c1})