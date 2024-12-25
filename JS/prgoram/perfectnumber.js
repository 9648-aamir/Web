// function isperfect(num){
//     let i=1;
//     let sum=0;
//     while(num>i){
//         if(num%i===0){
//             sum+=i;
//         }
//         i++;
//     }
//     return num===sum;
// }


function isperfect(num){
    
    let sum=0;
    for(let i=1;i<num;i++){
        if(num%i===0){
            sum+=i;
        }
    }
    return num===sum;
}

console.log(isperfect(6))