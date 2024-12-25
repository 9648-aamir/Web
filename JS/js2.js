var a=1;
let b=2;
const c=3;

{
    var a=10;
    let b=20;
    const c=30;

    console.log("Inside a Scope");
    console.log(a);
    console.log(b);
    console.log(c);
}

console.log("Outside Scope");
console.log(a);
console.log(b);
console.log(c);
