let arr=[[1,2,3],[4,5,6],[7,8,9]]

let x=arr.flatMap(element=>{
    return [element,element**2]
})

console.log(x)