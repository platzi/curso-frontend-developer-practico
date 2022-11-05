const menuemail = document.querySelector('.navbar-email');
menuemail.addEventListener('click', toggledesktopmenu);
const desktopmenu = document.querySelector('.desktop-menu')

function toggledesktopmenu(){
    desktopmenu.classList.toggle('inactive');
}