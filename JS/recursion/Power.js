// m-1
// function findPower(base,exponent){
//     return base**exponent;
// }

// m-2
// function findPower(base,exp){
//     return Math.pow(base,exp);
// }

// m-3

function findPower(base,exp){

    let power=1;
    for(let i=1;i<=exp;i++){
            power*=base;
    }
    return power;
}
console.log("Power is:"+findPower(2,3))


// m-4
// function findPower(base,exp){

//     if(exp===1){
//         return base;
//     }

//     return base*findPower(base,exp-1)
// }

// console.log("Power is:",findPower(2,3))