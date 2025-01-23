let arr=[[1,2,3],[4,5,6],[7,8,9]]

 let y=arr.map(row=>{
    let x=row.filter(element=>element%2===0)

        return x
}).flat(1)

//  let b=arr.flat(1).map(row=>{
//     let a=row.filter(element=>element%2===0)
//     return a
// })
console.log(y)
// console.log(b)