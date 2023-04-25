/* creamos variable apuntando al elemento */
const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCartIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

navEmail.addEventListener('click', toggleDesktopMenu );
menuHamIcon.addEventListener('click', toggleMobileMenu );
menuCartIcon.addEventListener('click', toggleCartAside );

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); /* preguntamos si contiene la clase ianctive */
    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
    }
    
    desktopMenu.classList.toggle('inactive'); /* toogle activa e inactiva una clase */
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive'); 
    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
    }

    mobileMenu.classList.toggle('inactive'); /* toogle activa e inactiva una clase */
}

function toggleCartAside() {
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive'); 
    
    
    if (!isMobileMenuClosed) {
        mobileMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive'); /* toogle activa e inactiva una clase */
 

}