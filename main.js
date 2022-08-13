const navEmail = document.querySelector('.navbar-email');
const menuICon = document.querySelector('.desktop-menu');
const cartIcon = document.querySelector('.navbar-shopping-cart')

const navMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleMenu);
menuICon.addEventListener('click', toggleMenuMobile);
cartIcon.addEventListener('click', toggleShopping);

function toggleMenu() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if(isAsideOpen) {
        aside.classList.add('inactive');
    }


    desktopMenu.classList.toggle('inactive');
}

function toggleMenuMobile() {
    const isAsideOpen = !aside.classList.contains('inactive');

    if(isAsideOpen) {
        aside.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShopping() {
   const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
   const isdestopMenuOpen = !desktopMenu.classList.contains('inactive')
   
   if(isdestopMenuOpen) {
       desktopMenu.classList.add('inactive');
   }

   if(isMobileMenuOpen) {
    mobileMenu.classList.add('inactive');
   }
   
   aside.classList.toggle('inactive');
}