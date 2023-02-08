const hello = () => {
  console.log('Entre en el TRY');
}

try {
  hello();
} catch (err) {
  console.log(err);
}

try {
  anotherFn();
} catch {
  console.log('Se ha creado un error');
}