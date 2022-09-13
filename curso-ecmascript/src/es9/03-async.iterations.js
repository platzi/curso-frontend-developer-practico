async function* anotherGenerator(){
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

const other = anotherGenerator();
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
other.next().then(response => console.log(response.value));
console.log('heyy')

async function arrayOfNames(Array) {
    for await (let value of Array){
        console.log(value)
    }
}

const names = arrayOfNames(['Fabian', 'david', 'ana']);
console.log('after')