const nav_email = document.querySelector(".navbar-email");
const DesktopMenu = document.querySelector(".desktop-menu");
const MenuIcon = document.querySelector(".menu");
const MenuCarritoIcon = document.querySelector(".navbar-shopping-cart");
const MobileMenu = document.querySelector(".mobile-menu");
const Aside = document.querySelector(".product-detail");


nav_email.addEventListener('click', ToggleDesktopMenu);
MenuIcon.addEventListener('click', ToggleMobileMenu);
MenuCarritoIcon.addEventListener('click', ToggleCArrito);


function ToggleDesktopMenu()
{
    //Esto es para validar si esta abierto el menu mobile o el aside.
    //Es decir: Si tiene la clase inactive es porque esta cerrado
    const IsAsideClosed = Aside.classList.contains('inactive');

    if (!IsAsideClosed) 
    {
        Aside.classList.add('inactive');
    }

    DesktopMenu.classList.toggle('inactive'); //El toggle quita y coloca la clase inactive dependiendo si la tiene o no
}

function ToggleMobileMenu()
{
    const IsAsideClosed = Aside.classList.contains('inactive');

    if (!IsAsideClosed) 
    {
        Aside.classList.add('inactive');
    }

    MobileMenu.classList.toggle('inactive'); //El toggle quita y coloca la clase inactive dependiendo si la tiene o no
}

function ToggleCArrito()
{
    const IsMobileMenuClosed = MobileMenu.classList.contains('inactive');

    if (!IsMobileMenuClosed) 
    {
        MobileMenu.classList.add('inactive');
    }

    Aside.classList.toggle('inactive');
}