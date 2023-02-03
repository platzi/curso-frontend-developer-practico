const h1=document.querySelector('h1');
const input1=document.querySelector('#calculo1');
const input2=document.querySelector('#calculo2');
const btn=document.querySelector('#btnCalcular');
const pResult=document.querySelector('#result');
function btnOnClick(){
    const sumaInputs=input1.value+input2.value;
    pResult.innerText="Resultado: "+sumaInputs;
}
// esta es la funcion que se debe ejecutar cada vez que se le da click a ese boton//
