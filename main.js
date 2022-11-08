const navbarEmail = document.querySelector('.navbar-email'); // Email en forma de texto que despliega el menu en version desktop
const desktopMenu = document.querySelector('.desktop-menu');
const navbarMobile = document.querySelector('.menu'); // Imagen en el navbar que despliega el menu en version mobile
const mobileMenu = document.querySelector('.mobile-menu');
const navbarShoppingCart = document.querySelector('.navbar-shopping-cart'); // Imagen en el navbar que despliega el carrito de compras.
const shoppingCart = document.querySelector('.product-detail');

navbarEmail.addEventListener('click', toggleDesktopMenu);
navbarMobile.addEventListener('click', toggleMobileMenu);
navbarShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleDesktopMenu(){
    const isShoppingCartOpen = !shoppingCart.classList.contains('inactive'); //si NO contiene la clase @inactive .contains() devuelve false, al negarlo el valor es true.

    if(isShoppingCartOpen){
        shoppingCart.classList.add('inactive')
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const isShoppingCartOpen = !shoppingCart.classList.contains('inactive'); //si NO contiene la clase @inactive .contains() devuelve false, al negarlo el valor es true.

    if(isShoppingCartOpen){
        shoppingCart.classList.add('inactive')
    }
    
    mobileMenu.classList.toggle('inactive');

}

function toggleShoppingCart(){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive');
    }else if(isDesktopMenuOpen){
        desktopMenu.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive');
}
