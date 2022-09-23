//  Menú que sale al darle click al correo (está a la derecha)
const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
//  Menú que sale al darle click al menú hamburguesa de la izquierda
const hamburgerMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//  Menú que sale al darle click al carrito de compras
const shoppingCarMenu = document.querySelector('.navbar-shopping-cart');
const shoppingCarPreview = document.querySelector('.product-detail');

menuEmail.addEventListener('click',toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    shoppingCarPreview.classList.add('inactive');
    // let isShoppingCarPreviewOpen = !shoppingCarPreview.classList.contains('inactive') ;
    // if (isShoppingCarPreviewOpen){
    //     shoppingCarPreview.classList.toggle('inactive');
    // }
}

hamburgerMenu.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    mobileMenu.classList.toggle('inactive');
    shoppingCarPreview.classList.add('inactive');

    // let isShoppingCarPreviewOpen = !shoppingCarPreview.classList.contains('inactive');
    // if (isShoppingCarPreviewOpen){
    //     shoppingCarPreview.classList.toggle('inactive');
    // }
}

shoppingCarMenu.addEventListener('click', toggleShoppingCarMenu);

function toggleShoppingCarMenu() {
    shoppingCarPreview.classList.toggle('inactive');
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    
    // let isDesktopMenuOpen = !desktopMenu.classList.contains('inactive') ;
    // let isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    // if (isDesktopMenuOpen) {
    //     desktopMenu.classList.toggle('inactive');
    // }
    // if (isMobileMenuOpen) {
    // mobileMenu.classList.toggle('inactive');
    // }

}