const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobilMenu = document.querySelector('.mobile-menu');



menuEmail.addEventListener('click',toggleDesktopMenu)
menuHamIcon.addEventListener('click',toggleMobilMenu)

function toggleDesktopMenu()
{
    desktopMenu.classList.toggle('inactive');
}

function toggleMobilMenu()
{
    mobilMenu.classList.toggle('inactive');
}