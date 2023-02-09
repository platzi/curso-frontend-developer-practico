const h1=document.querySelector('h1');
const form=document.querySelector('#form');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');

form.addEventListener("submit", sumarInputsValues); //lleva dos arguemtnos, primero el evento q querramos ejecutar y segundo el codigo js que querramos llamar

function sumarInputsValues(event){
    event.preventDefault();
    const sumaInputs=input1.value+input2.value;
    pResult.innerText="Resultado: "+sumaInputs;
}
// esta es la funcion que se debe ejecutar cada vez que se le da click a ese boton
// el form por defecto envia el botton y recarga la pagina, para evitarlo.
// le damos damos un paramtro a la funcion y luego a ese parametro lo llamamos con preventdefault
// otro metodo para que form no tome por defecto al ultimo boton como submit es cambiarle el type a la fuerza, por ejemplo
// al ultimo boton ponerle type = boton//

//bibliografia: https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
// ejemplos de eventos y mas teoria: https://www.arkaitzgarro.com/javascript/capitulo-15.html