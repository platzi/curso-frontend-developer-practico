const menuEmail = document.querySelector('.navbar-email')
const DesktopMenu = document.querySelector('.desktop-menu')
const menuhambur = document.querySelector('.menu')
const MobileMenu = document.querySelector('.mobile-menu')
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

menuEmail.addEventListener('click', toggleDesktopMenu)
menuhambur.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDesktopMenu(){
    DesktopMenu.classList.toggle('inactive')
}

function toggleMobileMenu(){
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }
    MobileMenu.classList.toggle('inactive')
}

function toggleCarritoAside(){
const isMobileMenuClosed =  MobileMenu.classList.contains('inactive')
const isDesktopMenu = DesktopMenu.classList.contains('inactive')

if (!isMobileMenuClosed){
    MobileMenu.classList.add('inactive')
}
if (!isDesktopMenu){
    DesktopMenu.classList.add('inactive')
}
aside.classList.toggle('inactive')
}