//DESKTOP MENU
const menuEmail = document.querySelector('.navbar-email')
const desktopMenu = document.querySelector('.desktop-menu')
//MOBILE MENU
const menuHamIcon = document.querySelector('.menu')
const mobileMenu = document.querySelector('.mobile-menu')
//ASIDE CARRITO
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const aside = document.querySelector('.product-detail')

//DESKTOP MENU
menuEmail.addEventListener('click', toggleDesktopMenu)
function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
        //Si el aside esta abierto al querer abrir el menu, se cerrara el aside
    }
    desktopMenu.classList.toggle('inactive') 
    //Intercambiar el agregar/quitar un clase
}

//MOBILE MENU
menuHamIcon.addEventListener('click',toggleMobileMenu)
function toggleMobileMenu(){
    //Saber si el aside esta cerrado
    const isAsideClosed = aside.classList.contains('inactive')

    if(!isAsideClosed){
        aside.classList.add('inactive')
        //Si el aside esta abierto al querer abrir el menu, se cerrara el aside
    }

    mobileMenu.classList.toggle('inactive')
}

//ASIDE CARRITO
menuCarritoIcon.addEventListener('click',toggleCarritoAside)
function toggleCarritoAside(){
    const isMobileClosed = mobileMenu.classList.contains('inactive')
    const isDesktopClosed = desktopMenu.classList.contains('inactive')

    if(!isMobileClosed){
        mobileMenu.classList.add('inactive')
    }

    if(!isDesktopClosed){
        desktopMenu.classList.add('inactive')
    }

    aside.classList.toggle('inactive')
}