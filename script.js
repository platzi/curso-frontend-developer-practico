//Desktop and mobile menu
const showDesktopMenu = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const showMobileMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
//Shopping cart
const showShoppingCart = document.querySelector('.navbar-shopping-cart');
const shoppingCart = document.querySelector('.product-detail');


//Shows menus (Desktop and mobile)
showDesktopMenu.addEventListener('click', toggleDesktopMenu);
showMobileMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    //Explicación de la lógica de "shoppingCartStatus" en la función "toggleShoppingCart"
    const shoppingCartStatus = shoppingCart.classList.contains('inactive');

    if(!shoppingCartStatus){
        shoppingCart.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    const shoppingCartStatus = shoppingCart.classList.contains('inactive');

    if(!shoppingCartStatus){
        shoppingCart.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

/*Show shopping cart*/
showShoppingCart.addEventListener('click', toggleShoppingCart);

function toggleShoppingCart(){
    //Si no tiene la clase devuelve FALSE. Significa que el menu esta abierto.
    const mobileMenuStatus = mobileMenu.classList.contains('inactive');
    const desktopMenuStatus = desktopMenu.classList.contains('inactive');
    
    if(!mobileMenuStatus){//(!false = true) Niego el false para que entre a la condición.
        //Close mobileMenu
        mobileMenu.classList.add('inactive');
    }
    if (!desktopMenuStatus) {
        //Closed desktopMenu
        desktopMenu.classList.add('inactive');
    }

    shoppingCart.classList.toggle('inactive');
}