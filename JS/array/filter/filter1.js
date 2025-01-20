let arr=[[1,2,3],[4,5,6],[7,8,9]]

let x=arr.map(row=>row.filter(element=>element%2==0))

let y=arr.map(row=>row.map(element=>element*2))

let z=arr.map(row=>row.filter(element=>element%3===0))

console.log(x)
console.log(y)
console.log(z)

let a = z.flat() 
console.log(a)