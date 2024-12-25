// function isPrime(num){
//     for(let i=2;i*i<=num;i++){
//     if(num%i==0)
//         return false
//     }
// return true;
// }

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
const userInput = parseInt(prompt('Enter a number to check if it is prime: '));
console.log(`Is ${userInput} a prime number?`, isPrime(userInput));