let arr=[10,20,30,40,50]

let x= arr.reduce((acc,element,index,array)=>{
    if(element<=30){
        acc.push(element)
    }
    return acc
},[])

console.log(x)