let arr=[1,2,3,4,5]

let mid=Math.floor(arr.length/2)

let x = arr.filter((element, index,array) =>{ 
    return index < mid; 
});

let y=arr.filter((element,index,array)=> element!=3)
console.log(x)

console.log(y)