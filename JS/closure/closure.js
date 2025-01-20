function classroom(){
    let bag="10cr";

    let task=function(){
        console.log("Hellow dear");
    }

    function tushar(){
        console.log("Inside Tushar fucntion")
        console.log(bag)
        console.log(task)

        task()
        return "All task"
    }
    return tushar;
}
    let x=classroom()
    console.log(x)
    console.log(x())

