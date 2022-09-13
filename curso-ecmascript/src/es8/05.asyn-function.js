const fnAsync = () =>{
    return new Promise((resolve, reject) =>{
        (true)
            ? setTimeout(() => resolve('async!!!'), 2000)
            : reject(new Error('Error!'));
    })
}

const anotherFunction = async () =>{
    const somthing =await fnAsync();
    console.log(somthing);
    console.log("hello");
}

console.log("before");
anotherFunction();
console.log("After");