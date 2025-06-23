const arr = [1,2,3];
arr.push(4);
console.log(arr);
//sol:16 output [1,2,3,4] we can mutate arrays declared with const but not reassign them.

const array = [1,2,3];
array = [4,5]
console.log(array);
//SOL16: typeError  reassigning a new array to a const variable is not allowed

const config = {
    theme: {
        color:'blue'
    }
};

config.theme.color="red";
console.log(config.theme.color);

//Sol18:- output is red we can change nested properties of a const object

const username;
username = "admin";
//SOL19:- output SyntaxError const must be initialized during declaration

