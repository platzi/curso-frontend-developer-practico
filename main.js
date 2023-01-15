const menuEmail = document.querySelector('.navbar-email');
const desktopmenu = document.querySelector('.desktop-menu');


menuEmail.addEventListener('click',toggleDekstopMenu)




function toggleDekstopMenu(){
    desktopmenu.classList.toggle ('inactive');
}