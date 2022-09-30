const menuEmail = document.querySelector('.navbar-email');
const menuDesktop = document.querySelector('.desktop-menu')


menuEmail.addEventListener("click", toggleDesktopMenu);

function toggleDesktopMenu(){
        menuDesktop.classList.toggle('inactive')

}