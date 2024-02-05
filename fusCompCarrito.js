/* aqui fusionaremos todos los.html del proyecto de desarrollador frontend para luego trabajarlo en java script y hacerlo un solo proyecto
 */


const menuEmail = document.querySelector('.navbar-email');
const DesktopMenuEmail = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenuIHam = document.querySelector('.mobile-menu');
const menuCarritoIcon  = document.querySelector('.navbar-shopping-cart');
const menuCarritoCompras = document.querySelector('.product-detail');




menuEmail.addEventListener('click', toggleDesktopMenuEmail);

menuHamIcon.addEventListener('click', ToggleMobilMenu);

menuCarritoIcon.addEventListener('click', ToggleCarritoCompras);


function toggleDesktopMenuEmail() {

     const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }
   
    DesktopMenuEmail.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva
}


function ToggleMobilMenu() {
    //en una variable almacenamos 
    const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');//Si contiene esa clase, entonces esta el menu cerrado
    if (!ismMenuCarritoComprasClosed) {
        menuCarritoCompras.classList.add('inactive');
    }
        mobileMenuIHam.classList.toggle('inactive');//quiere decir que el toggle lo activa e inactiva
    
}


function ToggleCarritoCompras() {
    //menuCarritoCompras.classList.toggle('inactive');
    //para que cuando est en modo movil con el menu del movil desplegado y le demos en el menu de tus ordenes y no se superpongan, entonces tenemos que preguntar si estan activos o inactivos, para que aparezca uno o el otro
    const ismobileMenuIHamClosed = mobileMenuIHam.classList.contains('inactive');
   // const ismMenuCarritoComprasClosed = menuCarritoCompras.classList.contains('inactive');
    if (!ismobileMenuIHamClosed) {
        mobileMenuIHam.classList.add('inactive');
    }
    menuCarritoCompras.classList.toggle('inactive');

}


