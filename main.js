var menuEmail = document.querySelector('.navbar-email');
var desktopMenu = document.querySelector('.desktop-menu');

menuEmail.addEventListener('click', toggleDesktopmenu);

function toggleDesktopmenu(){
 desktopMenu.classList.toggle('inactive')
};

console.log('funcionando');