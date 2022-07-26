const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const logoMenu = document.querySelector('.menu')
const mobilMenu = document.querySelector('.mobile-menu')

navEmail.addEventListener('click', toggleDesktopMenu);
function toggleDesktopMenu () {
    desktopMenu.classList.toggle('inactive')
}
logoMenu.addEventListener('click', toggleMobilMenu)
function toggleMobilMenu(){
    mobilMenu.classList.toggle('inactive')
}
