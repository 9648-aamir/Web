function isPalindrome(num){
    let original=num;
    let rev=0;
    while(num>0){
        let rem=num%10;
        rev=rev*10+rem;
        num=Math.floor(num/10);
    }
    return original===rev;
}

console.log(isPalindrome(121));