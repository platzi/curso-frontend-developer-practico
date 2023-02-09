// const menuEmail = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu');

// menuEmail.addEventListener('click', toggleDesktop)

// function toggleDesktop (){
//     console.log('click')
//     desktopMenu.classList.toggle('inactive');
// }

// const burger = document.querySelector('.menu')
// const movileMenu = document.querySelector('.mobile-menu')
// burger.addEventListener('click', toggleMovileMenu)
// function toggleMovileMenu(){
//     console.log('burger click')
//     movileMenu.classList.toggle('inactive')
// }

// const menuShoppingCart= document.querySelector('.navbar-shopping-cart');
// const aside = document.querySelector('.product-detail');

// menuShoppingCart.addEventListener('click', toogleMenuCarrito);

// function toogleMenuCarrito (){
//     const isAsideClesed = aside.classList.contains('inactive') 

//     console.log('que la chupe')
//     if(!isAsideClesed) {
//         aside.classList.add('inactive')
//        }

//     const isMobileMenuClosed = movileMenu.classList.contains('inactive');

//    // so el mobileMenu esta open, hay que cerrarlo
//    if(!isMobileMenuClosed) {
//     movileMenu.classList.add('inactive')
//    }
//    aside.classList.toggle('inactive')

   

// }


const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
  const isAsideClosed = aside.classList.contains('inactive');

  if (!isAsideClosed) {
    aside.classList.add('inactive');
  }
  
  desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
  
    if (!isAsideClosed) {
      aside.classList.add('inactive'); 
    }
    
    mobileMenu.classList.toggle('inactive');
  }
  
  function toggleCarritoAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    if (!isMobileMenuClosed) {
      mobileMenu.classList.add('inactive'); 
    }
    
    aside.classList.toggle('inactive');
  }