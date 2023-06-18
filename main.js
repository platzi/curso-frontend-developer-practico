const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const burgerMenu = document.querySelector('.menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleMailMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

// Vamos a crear nuestras funciones a partir de:
// * si uno de nuestros elementos contiene la clase "inactive" (está cerrado),
// el otro va a poder abrirse, pero en el caso de que no la contenga (está abierto),
// la apertura de un elemento va a quitarle la clase a otro.
// Con esto evitamos que los menues se pisen.

function toggleMailMenu(){
    aside.classList.add('inactive');
    desktopMenu.classList.toggle('inactive');

}


function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive');

    if(!isAsideClosed){
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}


function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');   

    if(!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    desktopMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}
