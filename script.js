let desktopMenu = document.querySelector(".desktop-menu");
let navBarEmail = document.querySelector(".navbar-email");

navBarEmail.addEventListener('click',toggleDesktop);

function toggleDesktop(){
    desktopMenu.classList.toggle('inactive');
}
