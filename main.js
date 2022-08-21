const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopMenu);



function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

/*Mobile*/

const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');


/*Mobile*/ 

menuHamIcon.addEventListener('click', toggleMobileMenu);



function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

/*carrito compras */

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside= document.querySelector('.product-detail');
menuCarritoIcon.addEventListener('click', toggleCarritoAside);  


function toggleCarritoMenu(){

    const isAsideClosed = aside.classList.contains('inactive');

    if (!isAsideClosed)
    aside.classList.add('inactive');

    mobileMenu.classList.toggle('inactive');
  }

  function toggleCarritoAside(){

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed)
    mobileMenu.classList.add('inactive');

    aside.classList.toggle('inactive');
  }
  




