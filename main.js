

const navEmail = document.querySelector('.navbar-email');
const dektopMenu = document.querySelector('.desktop-menu')

navEmail.addEventListener('click', toggDesktopMenu);

function toggDesktopMenu(){
    dektopMenu.classList.toggle('inactive');

}