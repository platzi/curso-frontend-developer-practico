const menuEmail     = document.querySelector('.navbar-email')
const menuHamIcon   = document.querySelector('.menu')
const menuCarrito   = document.querySelector('.navbar-shopping-cart')


const desktopMenu   = document.querySelector('.desktop-menu')
const mobileMenu    = document.querySelector('.mobile-menu')
const cartDetail    = document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDesktopMenu)
menuHamIcon.addEventListener('click', toggleMobileMenu)
menuCarrito.addEventListener('click', toggleMenuCart)


function toggleDesktopMenu(){
   const ismobileMenuClosed = mobileMenu.classList.contains('inactive')
   const isCartDetailClosed = cartDetail.classList.contains('inactive')
   if (!ismobileMenuClosed){
      mobileMenu.classList.add('inactive')
   }
   if (!isCartDetailClosed){
      cartDetail.classList.add('inactive')
   }
   desktopMenu.classList.toggle('inactive') 
}

function toggleMobileMenu(){
   const isCartDetailClosed = cartDetail.classList.contains('inactive')
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
   if (!isCartDetailClosed){
      cartDetail.classList.add('inactive')
   }
   if (!isDesktopMenuClosed){
      desktopMenu.classList.add('inactive')
   }
   
   mobileMenu.classList.toggle('inactive')
 }

 function toggleMenuCart(){
   const ismobileMenuClosed = mobileMenu.classList.contains('inactive')
   const isDesktopMenuClosed = desktopMenu.classList.contains('inactive')
   if (!ismobileMenuClosed){
      mobileMenu.classList.add('inactive')
   }
   if (!isDesktopMenuClosed){
      desktopMenu.classList.add('inactive')
   }
   cartDetail.classList.toggle('inactive') 
}


