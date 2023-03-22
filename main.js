const menuEmail = document.querySelector('.navbar-email');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart')
const desktopMenu = document.querySelector('.desktop-menu')
const hamburMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside =document.querySelector('.product-detail')


menuEmail.addEventListener('click', toggleDeskotMenu)
hamburMenu.addEventListener('click', toggleMobileMenu)
menuCarritoIcon.addEventListener('click', toggleCarritoAside)

function toggleDeskotMenu() {

    const  isAsideClose = aside.classList.contains('inactive')

    if(!isAsideClose){
    aside.classList.add('inactive'); 
}

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
   const  isAsideClose = aside.classList.contains('inactive')

        if(!isAsideClose){
    aside.classList.add('inactive'); 
}

mobileMenu.classList.toggle('inactive')
}
   
function toggleCarritoAside() {

    const isMobileMenuClose = mobileMenu.classList.contains('inactive');

   
  if(!isMobileMenuClose){

        mobileMenu.classList.add('inactive');   
    }
    aside.classList.toggle('inactive');
    
 }