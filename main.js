//selectores del menu email en desktop
const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector('.desktop-menu');

//selectores para el menu mobile
const MobileMenuIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

//Selectores para el carrito
const menuCarritoICon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

//escuchando el evento click en el menu desktop
menuEmail.addEventListener('click', toggleDesktopMenu)

//escuchando el evento click en el menu mobile
MobileMenuIcon.addEventListener('click', toggleMobileMenu)

//escuchando el evento click en el carrito
menuCarritoICon.addEventListener('click', toggleCarritoAside)

//funcion toggle para el menu en desktop

function toggleDesktopMenu() {

    //Cerrando el Menu del carrito
    const isAsideClosed = aside.classList.contains('incavtive')

    if (!isAsideClosed){
            aside.classList.add('inactive')
    }
    
    desktopMenu.classList.toggle('inactive')
}

//funcion toggle para el menu en mobile
function toggleMobileMenu(){

    //Cerrando el Menu del carrito
    const isAsideClosed = aside.classList.contains('incavtive')

    if (!isAsideClosed){
        aside.classList.add('inactive')
    }

    //Abriendo el menu mobile
    mobileMenu.classList.toggle('inactive')
}

//funcion toggle para el menu del carrito
function toggleCarritoAside(){

    //Cerrando el mobile menu y el desktop menu
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if (!isMobileMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }

    //Abriendo el menu del carrito
    aside.classList.toggle('inactive')

}