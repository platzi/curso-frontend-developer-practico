const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');


menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

//MENU LATERAL
function toggleMobileMenu() {
    //CREAMOS UNA VARIABLE PARA UBICAR EL VALOR BOOLEANO DE SU INACTIVE 
    //
    const isAsideClosed = aside.classList.contains('inactive');
    console.log(isAsideClosed);

    //SI EL VALOR EL VALOR DEL ASIDE DEL CARRITO ES NEGATIVO 'ESTA CERRADO' SE 
    //PROCEDE A ABRIR AÑADIENDO LA CLASE INACTIVE PARA SU VISIBILIDAD
    if(!isAsideClosed){
        aside.classList.add('inactive');    
    }
    //SI 
    mobileMenu.classList.toggle('inactive');
}



//MENU CARRITO DETALLES
function toggleCarritoAside(){
    //CREAMOS UNA VARIABLE PARA UBICAR EL VALOR BOOLEANO DE SU INACTIVE
    //SI EL MENU DEL LATERAL ESTA ABIERTO SE CERRARA CON LA SIGUIENTE VARIABLE
    //PARA QUE UNA NO ESTE ARRIBA DE LA OTRA
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

    //SI EL VALOR EL VALOR DEL MENU MOBILE ES NEGATIVO 'ESTA CERRADO' SE PROCEDE A ABRIR 
    //AÑADIENDO LA CLASE INACTIVE PARA SU VISIBILIDAD
    if(!isMobileMenuClose){
        mobileMenu.classList.add('inactive');
    }


    aside.classList.toggle('inactive');

}