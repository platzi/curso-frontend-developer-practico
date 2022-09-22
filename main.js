const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu ');

menuemail.addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
        desktopmenu.classList.toggle('inactive');
}