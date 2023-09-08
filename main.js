const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const HamIconMenu = document.querySelector('.menu');

const cartMenuIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu);
HamIconMenu.addEventListener('click', toggleMobileMenu);
cartMenuIcon.addEventListener('click', toggleCartMenuIcon);

function toggleDesktopMenu()
{
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
    }
    /*
    if(desktopMenu.classList.contains("inactive"))
    {
        desktopMenu.classList.remove("inactive");
    }
    else
    {
        desktopMenu.classList.add("inactive");
    }
    */
   desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    const isAsideClosed = aside.classList.contains('inactive');
    if (!isAsideClosed) {
        aside.classList.add('inactive'); 
    }
    mobileMenu.classList.toggle('inactive');
}

function toggleCartMenuIcon()
{
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed )
    {
        mobileMenu.classList.add('inactive'); 
    }

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed )
    {
        desktopMenu.classList.add('inactive'); 
    }

    aside.classList.toggle('inactive');
}