// Variables y constantes
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector('.burgerMenu');
const mobileBurgerMenu = document.querySelector('.mobile-menu');
const shoppingCartBtn = document.querySelector('.navbar-shopping-cart');
const productDetail = document.querySelector('.product-detail')

// Listeners para ventanas flotantes
menuEmail.addEventListener('click', toggleDesktopMenu);
burgerMenu.addEventListener('click', toggleMobileMenu);
shoppingCartBtn.addEventListener('click', toggleShoppingCart);

// desplegar menu de cuenta
function toggleDesktopMenu() {
    productDetail.classList.add('inactive'); // clase al 'product-detail'
    desktopMenu.classList.toggle('inactive');
}
// desplegar menu mobile
function toggleMobileMenu(){
    productDetail.classList.add('inactive');
    mobileBurgerMenu.classList.toggle('inactive');
}

// desplegar shopping cart
function toggleShoppingCart(){
    mobileBurgerMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive'); // inactive al 'desktop-menu'
    productDetail.classList.toggle('inactive');
}