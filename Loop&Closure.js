for (var i=0; i<3; i++){
    setTimeout(()=>console.log(i),1000)
}
//SOL:1 output 3 3 3 var is function scoped so the same i ( which becomes 3 after loop) is referenced in all timeouts.

for (let i = 0; i <3; i++){
    setTimeout(() => console.log(i));
}

//Sol:2 output 0 1 2 let is blocked scope. A new i is created on each iteration, so each closure gets a unique copy

for (const i = 0; i<3; i++){
    setTimeout(() => console.log(i));
}
//Sol4:- output TYypeError on first iteration. const cannot be updated. the loop requires reassignment of i, which is not allowed with const.

let x = 20; 
{
    let x = 10;
    console.log(x);
}
console.log(x)
//Sol15:- output 10, 20 the inner x shadow the outer x. they are different variables in different blocks

var y = 10;
{
    var y = 20;
    console.log(y);
}
console.log(y);
//Sol16:- output 20 20 because var is not block scoped so the inner assignment affects the outer x.

