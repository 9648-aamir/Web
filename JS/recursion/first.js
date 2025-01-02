console.log("start")

function movie(n){
    console.log(`Person: ${n}`)
    if(n===1){
        return true;
    }
    return movie(n-1);
}
console.log("Response",movie(5))