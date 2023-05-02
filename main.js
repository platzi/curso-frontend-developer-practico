const menuEmail         = document.querySelector('.navbar-email');
const desktopMenu       = document.querySelector('.desktop-menu');
const mobileMenuIco     = document.querySelector('.menu');
const mobileMenu        = document.querySelector('.mobile-menu');
const ShopCartMenuIco   = document.querySelector('.navbar-shopping-cart');
const ShopCartMenu      = document.querySelector('.product-detail');

// Escuchador despliegue menu email.
menuEmail.addEventListener('click',toggleDesktopMenu);
// Escuchador despliegue  menu hamburguesa.
mobileMenuIco.addEventListener('click',togglemobileMenuIco);
// Escuchador despliegue  menu carrito de compras.
ShopCartMenuIco.addEventListener('click',toggleShopCartMenuIco);

// Funcion despliegue menu email.
function toggleDesktopMenu()
{
    // Menú carrito de compras cerrado
    let isShopCartMenuuClose = ShopCartMenu.classList.contains('inactive');

    if (!isShopCartMenuuClose)
    {

        ShopCartMenu.classList.add('inactive');
    }  
    
    desktopMenu.classList.toggle('inactive');
}

// Funcion despliegue menu dispositivos mobiles.
function togglemobileMenuIco()
{
    // Menú carrito de compras cerrado
    let isShopCartMenuuClose = ShopCartMenu.classList.contains('inactive');

    if (!isShopCartMenuuClose)
    {

        ShopCartMenu.classList.add('inactive');
    }    

    mobileMenu.classList.toggle('inactive');
}

// Funcion despliegue menu carrito de compras.
function toggleShopCartMenuIco()
{
    // Menú movil cerrado
    let isMobileMenuClose = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClose)
    {

        mobileMenu.classList.add('inactive');
    }    
    ShopCartMenu.classList.toggle('inactive');
}