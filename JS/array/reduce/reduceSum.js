let arr=[[1,2,3],[4,5,6],[7,8,9]]

let x=arr.reduce((acc,row)=>{
    acc+=row.reduce((acc1,val)=>acc+val,0)
    return acc;
},0)

console.log(x)