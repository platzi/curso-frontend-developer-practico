const navright = document.querySelector('.navbar-right');
const desktopmenu = document.querySelector('.desktop-menu');
const burgermenu = document.querySelector('.menu');
const mobilemenu = document.querySelector('.mobile-menu');

navright.addEventListener('click', toggleDesktopmenu);
burgermenu.addEventListener('click', toggleMobileMenu);

function  toggleDesktopmenu (){
    desktopmenu.classList.toggle('inactive');
}   


function  toggleMobileMenu (){
    mobilemenu.classList.toggle('inactive');
}   