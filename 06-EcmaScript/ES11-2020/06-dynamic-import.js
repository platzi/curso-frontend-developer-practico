const button = document.getElementById('btn');

button.addEventListener('click', async function () {
  const module = await import('./06-module.js');
  console.log(module);
  module.hello();
})