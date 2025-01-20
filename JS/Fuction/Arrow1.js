const task1=function(){

    let key="abc"
    return (function(){
        console.log(key)
    })
}

const fun=()=>task1();

let x=fun()

console.log(x)
console.log(x())
// console.log(x())
// console.log(x())
