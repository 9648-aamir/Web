const task1=function(){

    let count=1
    return (function(){
        return count++
    })
}

const fun=()=>task1();

let x=fun()

console.log(x)
console.log(x())
console.log(x())
console.log(x())
