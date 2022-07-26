const menuEmail = document.querySelector('.navbar-email'); // las clases de CSS se 
const desktopMenu = document.querySelector('.desktop-menu'); // importan con un punto al inicio
const menuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCart = document.querySelector('.navbar-shopping-cart');
const asideMenu = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu); // El segundo parametro es una funcion a ejecutarse cuando se hace click (primero parametro)
menuIcon.addEventListener('click', toggleMobileMenu);
shoppingCart.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu()
{
    const isAsideMenuClosed = asideMenu.classList.contains('inactive');

    if(!isAsideMenuClosed)
    {
        asideMenu.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    const isAsideMenuClosed = asideMenu.classList.contains('inactive');

    if(!isAsideMenuClosed)
    {
        asideMenu.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCarritoAside()
{
    desktopMenu.classList.add('inactive'); // De esta forma siempre que entre
                                         // a esta funcion, se cierra el desktop Menu
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');
    
    
    if(!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }
    asideMenu.classList.toggle('inactive');
}
