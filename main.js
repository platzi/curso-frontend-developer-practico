const navright = document.querySelector('.navbar-right');
const desktopmenu = document.querySelector('.desktop-menu');

navright.addEventListener('click', toggleDesktopmenu);

function  toggleDesktopmenu (){
    desktopmenu.classList.toggle('inactive');
}   