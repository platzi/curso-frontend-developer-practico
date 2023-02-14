const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const imgMenuMobile = document.querySelector('.menu');

navEmail.addEventListener('click', toogleDesktopMenu)

function toogleDesktopMenu(){

    desktopMenu.classList.toggle('inactive')

}

imgMenuMobile.addEventListener('click', toogleMobileMenu)

function toogleMobileMenu(){

    mobileMenu.classList.toggle('inactive')
}





