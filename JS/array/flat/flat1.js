let arr=[[1,2,3],[4,5,6],[7,8,9]]

 let y=arr.map(row=>{
    let x=row.map(element=>element*2)

    return x
}).flat(1)

console.log(y)