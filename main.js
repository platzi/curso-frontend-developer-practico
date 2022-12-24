// ----------------------------------- CAPTURA DE ELEMENTOS -----------------------------------

const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail');

// ----------------------------------- ESCUCHA DE EVENTOS -----------------------------------

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu)
menuCarritoIcon.addEventListener('click',toggleCarritoAside);

// ----------------------------------- FUNCIONES -----------------------------------

// ----------------------------------- OCULTAR Ó MOSTRAR MENU DESKTOP -----------------------------------

//ALTERNATIVA 1
// function toggleDesktopMenu() {
//     if (desktopMenu.classList.contains('inactive')){
//         desktopMenu.classList.remove('inactive');
//     }else{
//         desktopMenu.classList.add('inactive');
//     }
// }

// ALTERNATIVA 2
function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    
    desktopMenu.classList.toggle('inactive');
}

// ----------------------------------- OCULTAR Ó MOSTRAR MENU MOBILE -----------------------------------

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

// ----------------------------------- OCULTAR O MOSTRAR ORDENES ACTIVAS -----------------------------------

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    // Si el menuMobile esta abierto se cierra
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }else if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
}
