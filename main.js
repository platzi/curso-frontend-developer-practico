const menuemail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');
menuemail.addEventListener('click', toggledesktopmenu);

function toggledesktopmenu() {
    desktopmenu.classList.toggle('inactive');
}