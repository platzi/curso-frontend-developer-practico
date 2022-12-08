const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shopCar = document.querySelector('.navbar-shopping-cart');
const shopList = document.querySelector('.product-detail');

menuHamMenu.addEventListener('click', toggleMobileMenu);
menuEmail.addEventListener('click', toggleDesktopMenu);
shopCar.addEventListener('click', toggleShopList);

function toggleDesktopMenu()
{
    const isAsideClosed = shopList.classList.contains('inactive')
    if (!isAsideClosed)
    {
        shopList.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu()
{
    const isAsideClosed = shopList.classList.contains('inactive')
    if (!isAsideClosed)
    {
        shopList.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

function toggleShopList()
{
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if (!isMobileMenuClosed)
    {
        mobileMenu.classList.add('inactive');
    }

    if (!isDesktopMenuClosed)
    {
        desktopMenu.classList.add('inactive');
    }

   shopList.classList.toggle('inactive');
}