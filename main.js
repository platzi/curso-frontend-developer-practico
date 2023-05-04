const clickMail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

clickMail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
}

console.log(desktopMenu.classList);