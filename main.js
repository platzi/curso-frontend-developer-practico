//menu desktop
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//menu mobile hamburguesa
const burguerMenu = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
//carrito
const carritoIconMenu = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
carritoIconMenu.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu() {
    const isAsideMenuOpen=!aside.classList.contains('inactive')
    if(isAsideMenuOpen){
        aside.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideMenuOpen=!aside.classList.contains('inactive')

    if(isAsideMenuOpen){
        aside.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
    const isMobileMenuOpen=!mobileMenu.classList.contains('inactive')
    const isDesktopMenuOpen=!desktopMenu.classList.contains('inactive')

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive')
    }
    if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')

}