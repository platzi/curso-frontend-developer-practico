// h1 { color: red }
// .parrafito { ... }
// #pid { ... }

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(input.value);

console.log({
  h1,
  p,
  parrafito,
  pid,
  input,
});

h1.innerHTML ="Modificacion <br> desde js"; //modicia el h1 con las etiquetas html//
h1.innerText= "Modificacion <br> desde js"; //modicia el h1 como un string//
console.log(h1.getAttribute ("class")); //lee si hay atributos class//
h1.setAttribute("class", "rojo"); //modifica atributos de html//
h1.classList.add("zul"); //agrega una clase al elemento//
h1.classList.remove("zul"); //remueve una clase al elemento//
h1.classList.toggle("verdolaga"); //dependiendo si tiene o no la clase la quita o la agrega//
h1.classList.contains("verdola"); // nos devuelve true o false dependiendo si esta o no la clase//
input.value = "Lo que querramos"; //Podemos cambair el valor o cualquier atributo que querramos//
document.createElement("img");//crea un elemento html//
const img = document.createElement("img"); //creamos una variable con la etiqueta imagen//
img.setAttribute ("src", "la url de una imagen"); // elegimos los atributos de la imagen y su ruta//
pid.append(img); //colocamos la imagen en el parrafo con el id llamado pid//
