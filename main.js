const menuEmail = document.querySelector('.navbar-email')
const menuDesktop = document.querySelector('.desktop-menu')
const burgerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const shoppingMenuIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

//let inactive = document.querySelector('.inactive')    // Cambiar valor de la propiedad del selector inactive

menuEmail.addEventListener('click', toogleDesktopMenu)
burgerMenu.addEventListener('click', toogleMobileMenu)
shoppingMenuIcon.addEventListener('click', toogleShoppingMenu)

function toogleDesktopMenu() {
    const isAsideCLose = aside.classList.contains('inactive');
//    inactive.style.display = ('block')                // Change the property of 'none' to block

    if (!isAsideCLose) {
        aside.classList.toggle('inactive')
        }
    menuDesktop.classList.toggle('inactive')
}
function toogleMobileMenu() {
    const isAsideCLose = aside.classList.contains('inactive');

    if (!isAsideCLose) {                            
        aside.classList.toggle('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}
function toogleShoppingMenu() {
    const isMobileMenuClose = mobileMenu.classList.contains('inactive');
    const isMenuDesktopClose = menuDesktop.classList.contains('inactive');
    
    if (!isMobileMenuClose) {                            
        mobileMenu.classList.toggle('inactive')
    }
    if (!isMenuDesktopClose) {                            
        menuDesktop.classList.toggle('inactive')
    }
    aside.classList.toggle('inactive')
}