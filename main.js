const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

const mobileMenu = document.querySelector('.mobile-menu');
const HamIconMenu = document.querySelector('.menu');

menuEmail.addEventListener('click', toggleDesktopMenu);
HamIconMenu.addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu()
{
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
    mobileMenu.classList.toggle('inactive');
}