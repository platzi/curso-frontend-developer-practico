const botonMostrarInfo = document.querySelector('.boton');
let contenido = document.querySelector('.contenido');

botonMostrarInfo.addEventListener('click', () => {
  async function dameInfo() {
    try {
      const respuesta = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!respuesta.ok) {
        throw new Error(`Error inesperado: ${respuesta.status} : ${respuesta.statusText}`);
      }

      let datos = await respuesta.json();

      let primerosInfo = datos.slice(0, 5)

      primerosInfo.forEach(dato => {
        let info = document.createElement('p');
        info.innerHTML = `Nombre: ${dato.name} <br> Email: ${dato.email}`;
        contenido.appendChild(info);
      })
    } catch (err) {
      let infoError = document.createElement('p');
      infoError.textContent = `Error en el servidor: ${err.message}`;
      contenido.appendChild(infoError);
    }
  }

  dameInfo();
});

let lorem = document.querySelector('.lorem');
let btnCambio = document.querySelector('.cambioClase');

btnCambio.addEventListener('click', () => {
  if (lorem.classList.contains('lorem')) {
    lorem.classList.replace('lorem', 'locura');
  }
});

let agregoElemento = document.querySelector('.agregoElemento');

agregoElemento.addEventListener('click', () => {
  let nuevoElemento = document.createElement('p');
  nuevoElemento.textContent = 'Nuevo elemento en el HTML desde JS';
  let segParr = document.querySelector('.segundoParrafo');
  let contParr = document.querySelector('.contenedorParrafo');
  contParr.insertBefore(nuevoElemento, segParr);

  let padreContenedor = segParr.parentNode;
  console.log(padreContenedor);
});

let btnHijo = document.getElementById('btnHijo');
let listaLi = document.querySelector('.lista');

btnHijo.addEventListener('click', () => {
  let hijos = listaLi.children;
  for (let i = 0; i < hijos.length; i++) {
    console.log(hijos[i]);
  }
});

let btnDevolver = document.querySelector('.devolver');

btnDevolver.addEventListener('click', () => {
  console.log(listaLi.firstElementChild);
  console.log(listaLi.lastElementChild);
})


