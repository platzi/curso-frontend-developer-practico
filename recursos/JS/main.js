const navEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamburguesa = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarrito = document.querySelector('.navbar-shopping-cart')
const shoppingDetail = document.querySelector('.product-detail')

navEmail.addEventListener('click', toggleDesktopMenu)
menuHamburguesa.addEventListener('click', toggleMobileMenu)
menuCarrito.addEventListener('click', toggleMenuCarrito)
function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive');
    shoppingDetail.classList.add('inactive')
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
    shoppingDetail.classList.add('inactive')
}
function toggleMenuCarrito() {
    shoppingDetail.classList.toggle('inactive')
    mobileMenu.classList.add('inactive')
    desktopMenu.classList.add('inactive')
}