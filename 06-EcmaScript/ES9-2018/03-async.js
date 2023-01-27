async function* dameDatos() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

const other = dameDatos();
other.next().then(resolve => console.log(resolve.value));
other.next().then(resolve => console.log(resolve.value));
other.next().then(resolve => console.log(resolve.value));
console.log('Hello');

///////////////////////////////

async function arrayOfNames(array) {
  for await(let value of array) {
    console.log(value);
  }
}

const names = arrayOfNames(['cristian', 'male', 'emiliano']);
console.log('After');