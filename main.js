const navEmail = document.querySelector(".navbar-email");

navEmail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    const desktopMenu = document.querySelector('.desktop-menu');
    desktopMenu.classList.toggle('inactive');
}