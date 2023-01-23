function greeting() {
  let username = 'Cristian';

  function displayUserName() {
    return `Hola ${username}`;
  }

  return displayUserName;
}

const g = greeting();
// console.log(g);
console.log(g());