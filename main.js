const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuMobile.addEventListener('click', togglemenuMobile);
menuCarritoIcon.addEventListener('click', togglemenuCarritoIcon);



function toggleDesktopMenu(){
     const isAsideClosed = aside.classList.contains('inactive');
     if (!isAsideClosed){
          aside.classList.add('inactive');
              //si el mobile menu esta abierto, hay que cerrarlo
         }
desktopMenu.classList.toggle('inactive');
}

function togglemenuMobile(){
     
     const isAsideClosed = aside.classList.contains('inactive');

     if (!isAsideClosed){
          aside.classList.add('inactive');
              //si el mobile menu esta abierto, hay que cerrarlo
         }
mobileMenu.classList.toggle('inactive'); 
}

function togglemenuCarritoIcon(){
     const ismobileMenuClosed = mobileMenu.classList.contains('inactive');


     //aside.classList.toggle('inactive);
     
     if (!ismobileMenuClosed){
      mobileMenu.classList.add('inactive');
          //si el mobile menu esta abierto, hay que cerrarlo
     }
     
aside.classList.toggle('inactive'); 

     
}

