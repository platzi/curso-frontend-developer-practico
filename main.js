const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const hamMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')

hamMenu.addEventListener('click', toggleMobileMenu)
navEmail.addEventListener('click', toggleDestopMenu);

//Esta funcion alternará la clase inactive
function toggleDestopMenu() {
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive')
}

