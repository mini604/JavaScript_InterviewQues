var a = 10;
function scopeTest() {
  console.log(a);
  var a = 20;
}
scopeTest();
//output: undefined var a is hoisted inside the function and shadows the outer a

let a = 10;
{
  var a = 20;
}
//output: Syntax Error we cannot declare the same variable naem wit let and var in the same scope

console.log(typeof x);
let x = 5;
// output: Reference Error let is in TDZ until the declaration is reached; not accessible before

const value;
value = 100;
//output: SyntaxError const must be initialized at declaration.

var language = "JavaScript";
{
  let language = "TypeScript";
  console.log(language);
}
console.log(language);
//output: typeScript , JavaScript let create a new variable in the block scope.

const a = 10;
{
  const a = 20;
  console.log(a);
}
console.log(a);
//output: 20 20 block scoping allows differebt a variables in different blocks

let x = 1;
let x = 2;
console.log(x);
//output: syntax error cannot redeclare let in the same scope.

var x = 5;
let x = 10;
//output: SyntaxError var and let with the same name in the same scope is not allowed

let x = 1;
{
  var x = 2;
}
//output:- syntax error confliciting declaration: block scoped let with var is not allowed.

if (true) {
  console.log(status);
  let status = "Active";
}
//output: Reference error status is in TDZ until the line it is declared


var num = 100;
function log() {
  console.log(num);
  var num = 200;
}
log();
//output:- undefined var num inside log() is hoisted and shadows the outer num.

const obj = {};
obj.name = "John";
console.log(obj.name);
//output:- "jhon" we can  mutate the content of an object declared with const.

let a = "global";
function outer() {
  let a = "outer";
  function inner() {
    console.log(a);
  }
  inner();
}
outer();
//output:- outer clousers access the closest scoped variable

const person = { name: "Deepti" };
Object.freeze(person);
person.name = "Neha";
console.log(person.name);
//output:- deeptu object.freeze() prevents mutation of object properties.