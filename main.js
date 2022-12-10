const navbarEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const navbarMobileMenu = document.querySelector('.mobile-menu');
const navbarMobileMenuIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const menuCarrito = document.querySelector('.product-detail');

navbarMobileMenuIcon.addEventListener('click', toggleMobileMenu);
navbarEmail.addEventListener('click', toggleDesktopMenu);
menuCarritoIcon.addEventListener('click', toggleCarrito);

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    if (desktopMenu.classList.contains('inactive')) {
        navbarEmail.innerText = 'Open';
    } else {
        navbarEmail.innerText = 'Close';
    }
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');
    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactive');
    }
}

function toggleMobileMenu() {
    const isMenuCarritoClosed = menuCarrito.classList.contains('inactive');
    if (!isMenuCarritoClosed) {
        menuCarrito.classList.add('inactive');
    }
    navbarMobileMenu.classList.toggle('inactive');
}

function toggleCarrito() {
    const isNavbarMobileMenuClosed = navbarMobileMenu.classList.contains('inactive');
    if (!isNavbarMobileMenuClosed) {
        navbarMobileMenu.classList.add('inactive');
    }   
    menuCarrito.classList.toggle('inactive');
    
    
}


console.log("funcionan js")

