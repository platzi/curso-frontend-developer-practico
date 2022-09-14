const menuEmails = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmails.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive')
}
function toggleCarritoAside() {
    const isMobileMenuClosed = !mobileMenu.classList.contains('inactive');
    const isAsideClosed = !aside.classList.contains('inactive');
    aside.classList.toggle('inactive')
    if (isAsideClosed) {
        
    }else{
        
    }
}