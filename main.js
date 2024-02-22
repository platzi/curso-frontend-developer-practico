const menuEmail = document.querySelector('.navbar-email'); //al darle click al email aparece el menu desktop
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuHamIcon.addEventListener('click',toggleMobileMenu)

menuEmail.addEventListener('click',toggleDesktopMenu)

menuCarritoIcon.addEventListener('click',toggleCarritoAside);


function toggleDesktopMenu(){
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed){
          aside.classList.add('inactive');
        }
    desktopMenu.classList.toggle('inactive');
    /*e agrega o quita la clase inactive de desktop-menu para mostrar o cerrar el menu desktop al dar click en el correo */ 
}

function toggleMobileMenu(){
   
   const isAsideClosed = aside.classList.contains('inactive');
if (!isAsideClosed){
      aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    const isMenudesktopClosed = desktopMenu.classList.contains('inactive');
    if (!isMobileMenuClosed){
      mobileMenu.classList.add('inactive');
    }
    //si el menu mobile esta abierto se cierra
    if (!isMenudesktopClosed){
        desktopMenu.classList.add('inactive');
      }
    aside.classList.toggle('inactive');

}