let arr=[10,20,30,40,50]

function Sum(arr1){
        let sum=0;
    for(let i=0;i<arr1.length;i++){

        sum+=arr1[i];
    }
    return sum;
}

let x=Sum(arr)

console.log(x)