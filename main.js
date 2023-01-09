const menuEmail = document.querySelector(".navbar-email");
    // con esto seleccionamos el elemento al que le vamos a hacer click para que aparezca el menu,

const desktopMenu = document.querySelector(".desktop-menu");

const imgMobile = document.querySelector(".menu");
    // con esto selecionamos el menu en mobile de html para darle inteccion en js

const mobileMenu = document.querySelector(".mobile-menu");

menuEmail.addEventListener('click', toggleDesktopMenu);
    // este toggle... es una funcion, pero como estamos dentro de un listener no es necesario poner los parentesis.
    // pero tenemos que crear esa funcion con ese nombre

function toggleDesktopMenu() {
    console.log('click');
    desktopMenu.classList.toggle('inactive'); 
}

imgMobile.addEventListener('click', toggleMobileMenu)

function toggleMobileMenu () {
    console.log('click');
    mobileMenu.classList.toggle('inactive');
}



