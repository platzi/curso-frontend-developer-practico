const navbarEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const logoDeMenu = document.querySelector(".logoMenu");
const mobileMenu = document.querySelector(".mobile-menu");
const carritoDecompras = document.querySelector(".navbar-shopping-cart")
const aside = document.querySelector(".product-detail")

navbarEmail.addEventListener('click', toggleDesktopMenu);
logoDeMenu.addEventListener('click', toggleMobileMenu);
carritoDecompras.addEventListener('click',toggleCarritoAside );

function toggleDesktopMenu(){
    aside.classList.add('inactive')
    desktopMenu.classList.toggle('inactive');
};

function toggleMobileMenu(){
    aside.classList.add('inactive')
    mobileMenu.classList.toggle('inactive');
};

function toggleCarritoAside(){
    navbarEmail.classList.add('ínactive')
    mobileMenu.classList.add('inactive')
    aside.classList.toggle('inactive');
}