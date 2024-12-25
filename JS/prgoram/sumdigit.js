function sumofdigits(num){

    let sum=0;
    for(let i=1;i<=num;i++){
        let rem=num%10;
        sum+=rem;
        num=Math.floor(num/10);
    }
    return sum;
}

console.log(sumofdigits(123))