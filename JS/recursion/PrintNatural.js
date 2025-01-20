/*
! normal function
*/

// function findSum(start,end){

//     let sum=0;

//     for(let i=start;i<=end;i++){
//         sum+=i;
//     }
//     return sum;
// }

// console.log("Sum is ",findSum(1,100))


// Recursion function

function findSum(n){

    if(n===1){
        return 1;
    }

    return n+findSum(n-1);

}

console.log("Sum of 1 to 100 is:",findSum(100))