const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu")
const menu = document.querySelector('.menu')
const mobileMenu =document.querySelector('.mobile-menu')


menuEmail.addEventListener('click', toggleDesktopMenu);

menu.addEventListener('click', toggleMenu)

function toggleMenu(){

    mobileMenu.classList.toggle("inactiv")

}

function toggleDesktopMenu(){

    desktopMenu.classList.toggle("inactiv");
}

