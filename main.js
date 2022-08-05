const menuEmail =document.querySelector('.navbar-email');
const desktopMenu =document.querySelector('.desktop-menu');
const menuHamIcon =document.querySelector('.menu');
const mobileMenu =document.querySelector('.mobile-menu');
const menuCarritoIcon= document.querySelector('.navbar-shopping-cart');
const aside= document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu)

menuHamIcon.addEventListener('click',toggleMobileMenu)

menuCarritoIcon.addEventListener('click',toggleCarritoAside)


function toggleMobileMenu(){
    const isAsideCLosed=aside.classList.contains('inactive');

    //desktopMenu.append(inactive);
    //obileMenu.classList.toggle('inactive');



    if (!isAsideCLosed) {
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');

    }



function toggleDesktopMenu(){

//desktopMenu.append(inactive);
desktopMenu.classList.toggle('inactive');

}




function toggleCarritoAside(){
//Cuando abrimos el carrito cerramos el menu movile siempre con la primera expresion
    const isMobileMenuCLosed=mobileMenu.classList.contains('inactive');
//si el menu movile esta abierto se mantiene se mantiene cerrado
    if (!isMobileMenuCLosed) {
        mobileMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
    }