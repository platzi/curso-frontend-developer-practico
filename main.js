function deployDesktopMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}
function deployMobileMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if (isAsideOpen) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}
function deployAside() {
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');

    if (isDesktopMenuOpen || isMobileMenuOpen) {
        desktopMenu.classList.add('inactive');
        mobileMenu.classList.add('inactive');
    }

    aside.classList.toggle('inactive');
}

const navBarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerIcon = document.querySelector('.burguer-icon');
const mobileMenu = document.querySelector('.mobile-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navBarEmail.addEventListener('click', deployDesktopMenu);
burguerIcon.addEventListener('click', deployMobileMenu); 
cartIcon.addEventListener('click', deployAside); 

