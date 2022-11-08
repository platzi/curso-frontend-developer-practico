const navbarEmail = document.querySelector('.navbar-email'); //Text-Email que despliega un menu
const desktopMenu = document.querySelector('.desktop-menu');
const navbarMobile = document.querySelector('.menu'); // Imagen que despliega el menu en version mobile
const mobileMenu = document.querySelector('.mobile-menu');

navbarEmail.addEventListener('click', toggleDesktopMenu);
navbarMobile.addEventListener('click', toggleMobileMenu);


function toggleDesktopMenu(){
    // Validar si este elemento contiene la clase especificada
    // True  > elimina
    // False > agrega
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}
