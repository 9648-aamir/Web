function fact(num){

    let fact1=1;
    for(let i=1;i<=num;i++){
        fact1*=i;
    }
    return fact1;
}

console.log(fact(4));