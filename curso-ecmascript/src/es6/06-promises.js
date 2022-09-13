const anotherFunction = () => {
    return new Promise((resolve, reject)=>{
        if(false){
            resolve('heyy!!');
        } else {
            reject('Whooooo!')
        }
    })
}

anotherFunction()
    .then(response => console.log(response))
    .catch(err => console.log(err));