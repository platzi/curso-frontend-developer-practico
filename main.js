//cree esta constante para no tener que estar escribiendo document.querySelector(selector) cada vez.
const $ = (selector) => document.querySelector(selector);

const menuEmail = $('.navbar-email');
const desktopMenu = $('.desktop-menu');
const menuHamIcon = $('.menu');
const mobileMenu = $('.mobile-menu');


/* como la escribió el profesor
menuEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
}*/

//Una forma mas comprimida de escribir el  evento de la función es:
/*
--------------------------------------------------
- menuEmail.addEventListener('click', ()=> {     -   
-     desktopMenu.classList.toggle('inactive')   -
- });                                            -
--------------------------------------------------
Pero al parecer no es una buena práctica ya que si te ves en la necesidad de remover el evento, al ser anónimo, no podrás hacerlo.


Para agregar la función flecha ()=> seria recomendable hacerlo así.*/

const toggleDesktopMenu = () => {
    desktopMenu.classList.toggle('inactive');
}
const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('inactive');
}

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
// Para que funcione tube que poner el evento click después de la función.