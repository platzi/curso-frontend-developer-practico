const menuEmail = document.querySelector('.navbar-email');
const menuBurgerIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
menuBurgerIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    
    //si el aside del carrito esta abierto hay que cerrarlo
    if (!isAsideClosed) {
        //si esta abierto este menu procedemos a cerrarlo ya que no pueden estar los dos abiertos al tiempo
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
    const isAsideClosed = aside.classList.contains('inactive');
    
    //si el aside del carrito esta abierto hay que cerrarlo
    if (!isAsideClosed) {
        //si esta abierto este menu procedemos a cerrarlo ya que no pueden estar los dos abiertos al tiempo
        aside.classList.add('inactive');
    }

    menuMobile.classList.toggle('inactive');
}

function toggleCarritoAside(){
    const isMobileMenuClosed = menuMobile.classList.contains('inactive');
    const isEmailMenuClosed = desktopMenu.classList.contains('inactive');
    //si el mobile menu o el menu desktop esta abierto hay que cerrarlo
    if (!isMobileMenuClosed) {
        //si esta abierto este menu procedemos a cerrarlo ya que no pueden estar los dos abiertos al tiempo
        menuMobile.classList.add('inactive');
    }

    if (!isEmailMenuClosed) {
        //si esta abierto este menu procedemos a cerrarlo ya que no pueden estar los dos abiertos al tiempo
        desktopMenu.classList.add('inactive');
    }
    aside.classList.toggle('inactive');
    

}