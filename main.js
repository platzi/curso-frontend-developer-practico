const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')

const iconHamMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

const aside = document.querySelector('.product-detail ')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')


menuEmail.addEventListener('click', toggleDesktopMenu)
iconHamMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)


function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); //si tiene la clase inactive significa que esta crrada 
   
    if(!isAsideClosed){    
        aside.classList.add('inactive'); // con esoto aseguro que voy a cerra el menu  para poder abrir l aside 
        }

    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside() {

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); //si tiene la clase inactive significa que esta crrada 
   
    if(!isMobileMenuClosed){    
        mobileMenu.classList.add('inactive'); // con esoto aseguro que voy a cerra el menu  para poder abrir l aside 
        }

    aside.classList.toggle('inactive');
}

