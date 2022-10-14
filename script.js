const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
const burguerMenu = document.querySelector('.burguerMenu')
const mobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
burguerMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive')
    if (!isAsideClosed){
        aside.classList.add('inactive')
        desktopMenu.classList.add('inactive')
    }
    desktopMenu.classList.toggle('inactive')
}
function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive')
    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    mobileMenu.classList.toggle('inactive')
}
function toggleCarritoAside(){
    const isMobilMenuClosed = mobileMenu.classList.contains('inactive')
    if (!isMobilMenuClosed){
        mobileMenu.classList.add('inactive')
    }
    aside.classList.toggle('inactive')
    
}