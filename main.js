//Aparece y desaparece el menu del email
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    const isasideclosed = aside.classList.contains('inactive');

    if (!isasideclosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

//Aparece y desaparece el menu de la izquierda
const HamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

HamIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    //Esta constante me dice cuándo el aside está abierto, y cuándo está cerrado (true=cerrado, false=abierto)
    const isasideclosed = aside.classList.contains('inactive');

    //Si el aside no está cerrado, hágalo
    if (!isasideclosed) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive')
}

//Aparece y desaparece el carro de compras
const CarroIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

CarroIcon.addEventListener('click', toggleCarro);

function toggleCarro() {
    //Esta constante me dice cuándo el mobileMenu está abierto, y cuándo está cerrado
    const ismobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isdesktopclosed = desktopMenu.classList.contains('inactive');

    //Si el menu mobile no ésta cerrado, hágalo
    if (!ismobileMenuClosed || !isdesktopclosed)  {
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}