const user = {
  username: 'revelion',
  age: 37,
  country: 'AR',
}

const {username, ...values} = user;
console.log(username);
console.log(values);