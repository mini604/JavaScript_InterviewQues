
console.log(a);
var a = 5;
//output is undefined because var is hoisted to the top of the scope and initialized as undefined, this is why accessing it before assignment does not throw an error, but show undefined


//console.log(b);
//let b = 10;
//output is ReferenceError because let is hoisted but kept in the temporal Dead Zone(TDZ), so accessing it before declaration is not allowed.

/*
function testVar() {
    if(true){
        var x = 5;
    }
    console.log(x);
}

function testLet() {
    if(true){
        let y = 8;
    }
    console.log(y)
}

testVar();
testLet();
//output testVar() it print 5
//testLet() it show Reference Error because let is block-scoped and var is function-scoped
*/
/*
let q = 1;
{
  let q = 2;
  console.log(q);
}
console.log(q);
*/

//output 2 ,1 Each let is scoped to its bloack. inner block q does not affect the outer.

function hoistTest() {
  console.log(x);
  var x = 100;
}
hoistTest();
//output undefined var is hoisted to the top of the function, but it value is not assigned until that line.

//console.log(x);
//const x = 42;
//output: ReferenceError const is also hosited but kept in the temporal dead Zone

var name = "deepti";
var name = "kiran";
console.log(name);
//output is kiran because redeclaring a var variable in the same scope is allowed

//let city = "Delhi";
//let city = "Goa";
//console.log(city)
//outupt is syntax error let cannot be redeclared in the same block scope.

const PI = 3.14;
PI = 3.14159;
//output is typeErro we can not reassign a const variable

const  user = { name:"Deepti"};
user.name= "neha";
console.log(name);
//output Neha because while const prevents reassignment of the variable, it does not prevent changes to object properties.