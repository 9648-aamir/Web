let arr1=["10","20","30","40"]

const newarr=[]

let x=arr1.forEach((element) => {
    
    newarr.push(element*10)
});

console.log(arr1)
console.log(newarr)
console.log(x)