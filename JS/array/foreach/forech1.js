let arr1=["10","20","30","40"]

arr1.forEach((element,index,array) => {
    array[index]=(element*10)
});

console.log(arr1)