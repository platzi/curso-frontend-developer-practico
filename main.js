// cada que le damos click al email debe aparecer el menu.
const menuMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu')
    // vamos a crear el query del menu hamburguesa pra mobile
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')


// cada que le demos click se hara la funcion 


menuMail.addEventListener('click', toggleDEsktopMenu);

// evenlistener del menuHamIcon

menuHamIcon.addEventListener('click', toggleMobileMenu);


function toggleDEsktopMenu() {
    // * lo que vamos  a hacer es colocarle o quitarle la clase inactive si ya la tiene o no
    desktopMenu.classList.toggle('inactive');
}


function toggleMobileMenu() {
    // lo que vamos  a hacer es colocarle o quitarle la clase inactive si ya la tiene o no
    mobileMenu.classList.toggle('inactive');
}