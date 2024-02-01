/* aqui fusionaremos todos los.html del proyecto de desarrollador frontend para luego trabajarlo en java script y hacerlo un solo proyecto
 */

const listaCompras =  document.getElementById('navbar-shopping-cart');
//const btonCompras =  document.getElementById('seleccioonarCompras');
const sectionMenuGneral = document.querySelector('#menuGeneral');
const sectionMenuOrdenes = document.querySelector('#menuOrdenes');



function iniciarMenuGeneral() {
    sectionMenuOrdenes.style.display = 'none';
    
    //btonCompras.addEventListener('click', iniciarMenuOrdenes);
    listaCompras.addEventListener('click', iniciarMenuOrdenes);


}




function iniciarMenuOrdenes() {
    sectionMenuGneral.style.display = 'none';
    sectionMenuOrdenes.style.display = 'flex';
}

window.addEventListener('load', iniciarMenuGeneral)



fkjdjkjhgjkdfjhfjkjhdfkfd