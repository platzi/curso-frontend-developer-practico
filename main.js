const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');

}

const burguerMenu = document.querySelector('.menu');
const mobMenu = document.querySelector('.mobile-menu');

burguerMenu.addEventListener('click', toggleMobMenu);

function toggleMobMenu(){
    mobMenu.classList.toggle('none')
}
