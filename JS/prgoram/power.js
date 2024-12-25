// function power(a,b){
//     return Math.pow(a,b);
// }
// console.log(power(2,3));

function power(a,b){
    let power=1;
    for(let i=1;i<=b;i++){
        power*=a;
    }
    return power;
}
console.log(power(2,3));