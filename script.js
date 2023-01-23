const menuEmail=document.querySelector('.navbar-email')
const desktopMenu= document.querySelector('.desktop-menu')
const burgerMenu= document.querySelector('.menu')
const mobileMenu= document.querySelector('.mobile-menu')
const carritoMenu= document.querySelector('.navbar-shopping-cart')
const carrito= document.querySelector('.product-detail')

menuEmail.addEventListener('click',toggleDesktopMenu)
burgerMenu.addEventListener('click',toggleMobileMenu)
carritoMenu.addEventListener('click',togglecarritoMenu)


function toggleDesktopMenu()
{
    const carritoOpen= !carrito.classList.contains('inactive')

    if(carritoOpen)
    {
    carrito.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu () {

    const carritoOpen= !carrito.classList.contains('inactive')

    if(carritoOpen)
    {
    carrito.classList.add('inactive')
    }

    mobileMenu.classList.toggle('inactive')

}

function togglecarritoMenu () {

    const mobileMenuOpen= !mobileMenu.classList.contains('inactive')
    const desktopMenuOpen= !desktopMenu.classList.contains('inactive')

    if(desktopMenuOpen)
    {
    desktopMenu.classList.add('inactive')
    }

    if(mobileMenuOpen)
    {
    carrito.classList.add('inactive')
    }

    carrito.classList.toggle('inactive')
 }

//Mucho mas sencillo 😃

//const menu = document.querySelector('.desktop-menu');
//const navEmail = document.querySelector('.nav-email');
//const menuMobile = document.querySelector('.mobile-menu');
//const IconHam = document.querySelector('.menu');
///* checkout-shopping-cart */
//const cart = document.querySelector('.shopping-car');
//const aside = document.querySelector('.section-container');
///* defined inactive-stated */
//const mobileClosed = menuMobile.classList.contains('inactive');
//const asideClosed = aside.classList.contains('inactive');
//const menuClosed = menu.classList.contains('inactive');
//
//
//navEmail.addEventListener('click',block);
//IconHam.addEventListener('click',blockMobile);
//cart.addEventListener('click',blockCart);
//
//
//function block()
//{
//    menu.classList.toggle('inactive');
//    aside.classList.add('inactive');
//}
//
//
//function blockMobile()
//{
//    menuMobile.classList.toggle('inactive');
//     aside.classList.add('inactive');
//        console.log(mobileClosed);
//}
//
//function blockCart()
//{
//    aside.classList.toggle('inactive');
//    menuMobile.classList.add('inactive');
//    menu.classList.add('inactive');
//    console.log(asideClosed);
//
//}
//