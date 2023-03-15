//declaramos una variable para llamar la clase a la cual el usuario le va a dar clic
const menuEmail = document.querySelector('.navbar-email');
//declaramos una variable para llamar la clase que va a aparecer cuando el usuario de clic
const desktopMenu = document.querySelector('.desktop-menu');

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

//con este comando, indicamos que cuando el usuario de click, aparezca o desaparezca según lo que el usuario haga
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

//pero antes debo crear la función que llamará el anterior comando, la función lo que hace es ejecutar la función classList.toggle que quita o pone la clase inactive, dependiendo de si ya la tiene o no la tiene
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed) {
        aside.classList.add('inactive');    
    }
    
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.contains('inactive')    
    }

    aside.classList.toggle('inactive');
   
}

