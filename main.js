const navbarEmail = document.querySelector(".navbar-email")
const desktopMenu = document.querySelector(".desktop-menu")
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')


navbarEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleAside)



function toggleDesktopMenu(){
    let isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');

}

function toggleMobileMenu(){
    let isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive');

}
function toggleAside(){
    aside.classList.toggle('inactive');

    let isMobileClosed = mobileMenu.classList.contains('inactive')
    if(!isMobileClosed){
        mobileMenu.classList.add('inactive')
    }

    let isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive')
    }
}