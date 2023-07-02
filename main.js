const desktopMenu = document.querySelector('.desktop-menu');
const navBarEmail = document.querySelector('.navbar-email');


navBarEmail.addEventListener('click', function(){
    desktopMenu.classList.toggle('inactive');
});
