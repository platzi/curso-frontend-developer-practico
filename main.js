//obtener el elemento html para escuchar eventos
//menu de escritorio
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const shoppingCar = document.querySelector('.navbar-shopping-cart');

// obtener elemento html para mostrar u ocultar
//menu mobile
const burguerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

//añadir un listener al evento del click
menuEmail.addEventListener('click',toggleDesktopMenu);
burguerMenu.addEventListener('click',toggleMobileMenu);
shoppingCar.addEventListener('click',toggleShoppingCar);
//crear la función que cambia la propiedad del elemento
function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isAsideOpen = !aside.classList.contains('inactive');
    if(isAsideOpen)
        aside.classList.toggle('inactive');
    mobileMenu.classList.toggle('inactive');
}

function toggleShoppingCar(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    if(isMobileMenuOpen)
        mobileMenu.classList.toggle('inactive');
    aside.classList.toggle('inactive');

}
console.log('js funcionando');